

from app.zoo_api.model.SpeciesModel import SpeciesModel
from app.zoo_api.model.GenderModel import GenderModel
from app.zoo_api.model.RoleModel import RoleModel
from app.zoo_api.model.ScheduleModel import ScheduleModel

from app.zoo_api.utils.ModelType import ModelType



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