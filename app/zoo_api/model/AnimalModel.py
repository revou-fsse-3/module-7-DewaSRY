

from uuid import uuid4
from dataclasses import dataclass

from app.zoo_api.utils.FlaskDb import db
from app.zoo_api.model.SpeciesModel import SpeciesModel
from app.zoo_api.model.GenderModel import GenderModel

from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, Relationship
from app.zoo_api.service.ModelMatcher import SpeciesMather, GenderMather

@dataclass
class AnimalModel(db.Model):
    __tablename__= "animal"
    animalId :Mapped[str]= mapped_column("animal_id", String(36), primary_key=True,)
    name:Mapped[str]= mapped_column("name", String(50))
    speciesId:Mapped[int]= mapped_column("species_id", Integer,ForeignKey("species.species_id") )
    genderId:Mapped[int]= mapped_column("gender_id", Integer,ForeignKey("gender.gender_id"))
    age:Mapped[int]= mapped_column("age" , Integer)
    
    species:Mapped[SpeciesModel]= Relationship("SpeciesModel",backref="animal")
    gender:Mapped[GenderModel]= Relationship("GenderModel", backref="animal")

    def __init__(self, name: str ,species: str, gender:str, age:int ):
        
        self.animalId=str(uuid4())
        self.name=name
        self.speciesId=SpeciesMather(species)
        self.genderId=GenderMather(gender)
        self.age=age

    def update(self, name: str=None ,species: str=None, gender:str=None, age:int=None ):
        if species != None:
            self.speciesId=SpeciesMather(species)
        if gender != None :
             self.genderId=GenderMather(gender)
        self.name=name if name != None else self.name
        self.age=age if age != None else self.age
    
    
    

    def __repr__ (self):
        return f"{self.species} {self.name} {self.gender} {self.age} {self.animalId}"
    


