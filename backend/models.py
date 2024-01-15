from database import Base
from pydantic import BaseModel
from sqlalchemy import Column, Integer, String

class Cafe(Base):
    __tablename__ = "cafe"
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True, index=True)
    map_url = Column(String, unique=True)
    img_url = Column(String, unique=True)
    location = Column(String)
    has_sockets = Column(Integer)
    has_toilet = Column(Integer)
    has_wifi = Column(Integer)
    can_take_calls = Column(Integer)
    seats = Column(String)
    coffee_price = Column(String)

class UserPasswordModel(BaseModel):
    email: str
    password: str

class LogInModel(BaseModel):
    hashed_password: str
    email: str