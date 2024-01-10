from pydantic import BaseModel

class CafeBase(BaseModel):
    cafe: bool
    coffe_price: str   

class Location(BaseModel):
    location: str