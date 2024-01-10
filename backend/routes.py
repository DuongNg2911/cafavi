from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import random

from models import Cafe
from database import SessionLocal
from schema import Location

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