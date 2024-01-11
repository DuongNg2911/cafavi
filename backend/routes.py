from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import random

from models import Cafe
from database import SessionLocal
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
def get_all(db:Session = Depends(get_db)):
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
        if d.location == loc:
            result.append(d)
    if len(result) != 0:
        return result
    else:
        return {
            "error": {
                "Not Found": "Sorry, we don't have any cafe at that location"
            }
        }

# POST 
@router.post("/signin")

@router.post("/signup")

@router.post("/suggest_new_cafe")
def suggest(cafe: NewCafe, db: Session = Depends(get_db)):
    db_item = Cafe(**cafe.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)

    return db_item