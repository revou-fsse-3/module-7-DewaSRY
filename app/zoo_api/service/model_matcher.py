

from app.zoo_api.model.special_model import SpeciesModel
from app.zoo_api.model.gender_model import GenderModel
from app.zoo_api.model.role_model import RoleModel
from app.zoo_api.model.schedule_model import ScheduleModel

from app.zoo_api.utils.model_type import ModelType



def matherModel(model:ModelType,value:str= None): 
    if value == None : return 
    search = "%{}%".format(value)
    matchModel =   model.query.filter(model.name.like(search)).first() 
    return matchModel.id if matchModel else 1

def SpeciesMather(value:str):
    return matherModel(SpeciesModel, value)
def GenderMather(value:str):
    return matherModel(GenderModel, value)
def RoleMather(value:str):
    return matherModel(RoleModel, value)
def ScheduleMather(value:str):
    return matherModel(ScheduleModel, value)