from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from pymongo import MongoClient

SQLALCHEMY_DATABASE_URL = "sqlite:///./cafes.db"

# connect_args needed only for SQLite
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

client = MongoClient("mongodb+srv://duongng2911:UlwBqpIC7PS2yDKW@user-password.oty9bv2.mongodb.net/?retryWrites=true&w=majority")

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
    
db = client.userpassword_db
collection_name = db["userpassword_collection"]

