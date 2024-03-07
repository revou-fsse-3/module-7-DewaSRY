from uuid import uuid4
from passlib.hash import pbkdf2_sha256
from app.zoo_api.utils.FlaskDb import db

from sqlalchemy import  String
from sqlalchemy.orm import Mapped, mapped_column



class UserModel(db.Model):
    __tablename__= "user"
    userId:Mapped[str]=  mapped_column("user_id",  String(36), primary_key=True)
    username:Mapped[str]=  mapped_column("user_name",String(20)  )
    password:Mapped[str]=  mapped_column("password", String(250) )

    def __init__(self, username:str, password:str ):
      self.userId=str(uuid4())
      self.username= username
      self.password=  pbkdf2_sha256.hash(password) 
      
      
    def update(self, username :str =None, password:str=None ):
      self.username = username if username !=None else self.username
      self.password = pbkdf2_sha256.hash(password)  if password !=None else self.password
   




