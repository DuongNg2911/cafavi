from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import random
import bcrypt

from models import Cafe, UserPasswordModel, LogInModel
from database import SessionLocal, collection_name
from schema import NewCafe

router = APIRouter()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# GET
@router.get("/get_all_cafes")
async def get_all(db:Session = Depends(get_db)):
    data = db.query(Cafe).all()
    return data

@router.get("/get_random_cafes")
def get_random(db:Session = Depends(get_db)):
    data = db.query(Cafe).all()
    return data[random.randint(0, len(data)-1)]

@router.get("/search")
def search(loc: str, db: Session = Depends(get_db)):
    data = db.query(Cafe).all()
    result = []
    for d in data:
        if d.name.lower() == loc.lower():
            result.append(d)
    if len(result) != 0:
        return result
    else:
        return {
            "error": {
                "Not Found": "Can't find cafe "
            }
        }

@router.get("/check_email")
async def get_salt(user_email: str):
    user = collection_name.find_one({"email" : user_email})
    if not user:
        return {"response":"Invalid email or password"}
    else:
        return user.get("salt")

@router.get("/filter_by_purpose") 
async def filter_data_by_purpose(db: Session = Depends(get_db)):
    data = db.query(Cafe).filter(Cafe.has_sockets==1, Cafe.has_wifi==1, Cafe.can_take_calls==1,Cafe.has_toilet==1)
    return data

# POST 
@router.post("/signin")
async def check_password(data: LogInModel):
    user = collection_name.find_one({"email" : data.email})

    if user.get("password") == data.hashed_password.encode("utf-8"):
        return {"response" : "Login Successfully"}
    else:
        return {"response": "Login falied"}


@router.post("/signup")
async def sign_up(data: UserPasswordModel):
    if (collection_name.find_one({"email": data.email})):
        return {"response": "Email is already taken"}
    else:
        salt = bcrypt.gensalt(12)
        byte_password = data.password.encode('utf-8')
        hashed = bcrypt.hashpw(byte_password, salt)
        collection_name.insert_one({"email": data.email, "password": hashed, "salt": salt})
        return {"response": "Signup successfully"}


@router.post("/suggest_new_cafe")
def suggest(cafe: NewCafe, db: Session = Depends(get_db)):
    db_item = Cafe(**cafe.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item