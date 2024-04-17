from uuid import uuid4
from dataclasses import dataclass

from app.zoo_api.utils.flask_db import db
from sqlalchemy import Integer, String

from sqlalchemy.orm import mapped_column


@dataclass
class GenderModel(db.Model):
    __tablename__= "gender"
    id= mapped_column("gender_id", Integer, primary_key=True)
    name= mapped_column("gender", String(50))
    
 
    def __init__(self, name: str  ):
        self.name=name

    def update(self, name: str=None  ):
        self.name=name if name != None else self.name
  
    def __repr__(self) -> str:
        return f"{self.name}"


