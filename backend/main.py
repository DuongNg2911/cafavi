from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import router
import models
from database import engine
from pymongo import MongoClient

models.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(router)

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGODB_CONNECTION_URI="mongodb+srv://duongng2911:UlwBqpIC7PS2yDKW@user-password.oty9bv2.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(MONGODB_CONNECTION_URI)