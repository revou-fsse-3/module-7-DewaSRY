
from app.zoo_api.utils.FlaskDb import db

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship


class SpeciesModel(db.Model):
    __tablename__= "species"
    id:Mapped[int]= mapped_column("species_id", Integer, primary_key=True)
    name:Mapped[str]= mapped_column("species", String(50))

    def __init__(self, name: str  ):
        self.name=name

    def update(self, name: str=None  ):
        self.name=name if name != None else self.name
  

    def __repr__(self) -> str:
        return f"{self.name}"
    


