from uuid import uuid4
from dataclasses import dataclass

from app.zoo_api.utils.flask_db import db
from app.zoo_api.model.role_model import RoleModel
from app.zoo_api.model.schedule_model import ScheduleModel
from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, Relationship

from app.zoo_api.service.model_matcher import RoleMather, ScheduleMather


@dataclass
class EmployeeModel(db.Model,):
    __tablename__= "employee"
    employeeId:Mapped[str]= mapped_column("employee_id", String(36), primary_key=True)
    roleId:Mapped[int]= mapped_column("role_id", Integer,ForeignKey("role.role_id") )
    scheduleId= mapped_column("schedule_id", Integer, ForeignKey("schedule.schedule_id")) 
    name:Mapped[str]= mapped_column("name", String(50 )) 
    email:Mapped[str]= mapped_column("email", String(50)) 
    phone:Mapped[str]= mapped_column("phone", String(50)) 
    
    role:Mapped[RoleModel] = Relationship("RoleModel", backref="employee")
    schedule:Mapped[ScheduleModel] = Relationship("ScheduleModel", backref="employee")

    def __init__(self, role :str, schedule:str, name:str, email:str, phone:str ):
      self.employeeId=str(uuid4())
      self.roleId = RoleMather(role)
      self.scheduleId = ScheduleMather(schedule)
      self.name = name
      self.email = email
      self.phone = phone
      
    def update(self, role :str =None, schedule:str=None, name:str=None, email:str=None, phone:str=None):
      print(schedule)
      print(ScheduleMather(schedule) )
      
      if  schedule !=None  : 
        self.scheduleId = ScheduleMather(schedule) 
      if role !=None :
         self.roleId = RoleMather(role) 
        
      self.name = name if name !=None else self.name
      self.email = email if email !=None else self.email
      self.phone = phone if phone !=None else self.phone
      
    def get_item_dict(self):
        return self.__dict__
    
    def __str__ (self):
        return f"{self.role} {self.name} {self.schedule} {self.email} {self.phone} {self.employeeId}"




