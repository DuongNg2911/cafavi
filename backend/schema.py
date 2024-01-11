from pydantic import BaseModel

class CafeBase(BaseModel):
    cafe: bool
    coffe_price: str   

class NewCafe(BaseModel):
    name: str
    map_url: str
    img_url: str
    location: str
    has_sockets: int
    has_toilet: int
    has_wifi: int
    can_take_calls: int
    seats: str
    coffee_price: str