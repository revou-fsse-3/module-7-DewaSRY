from dataclasses import dataclass

from app.zoo_api.utils.FlaskDb import db

from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column


@dataclass
class ScheduleModel(db.Model):
    __tablename__= "schedule"
    id:Mapped[int]= mapped_column("schedule_id", Integer, primary_key=True)
    name:Mapped[str]= mapped_column("schedule", String(50))
 

    def __init__(self, name: str  ):
        self.name=name

    def update(self, name: str=None  ):
        self.name=name if name != None else self.name
  

    def __repr__(self) -> str:
        return f"{self.name} "
    


