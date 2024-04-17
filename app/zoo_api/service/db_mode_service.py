from app.zoo_api.utils.model_type import ModelType
from app.zoo_api.utils.flask_db import db
from sqlalchemy.exc import SQLAlchemyError

class DbModelService:
    def __init__(self, dbModel:ModelType) -> None:
         self.dbModel= dbModel
         self.dbSession=db.session

    def getDbModalAll( self,) :
        items=self.dbModel.query.all()
        return items
    
    def addModel(self, **args)->ModelType :
        model =self.dbModel(**args)
        self.postDbModal(model)
        return model
        
    def postDbModal(self, model:ModelType):
        try:
            self.dbSession.add(model)
            self.dbSession.commit()
        except SQLAlchemyError:
            raise SQLAlchemyError

    def getDbModal(self, store_id: str)->ModelType:
        store = self.dbModel.query.get_or_404(store_id)
        return store
    
    def deleteDbModal(self, store_id: str):
        db = self.getDbModal(store_id)
        self.dbSession.delete(db)
        self.dbSession.commit()
        return
    def updateDbModel(self ,store_id: str, args)->ModelType:
        item=self.getDbModal(store_id)
        if item == None : return 

        item.update(**args)
        
        self.dbSession.add(item)
        self.dbSession.commit()
        return item




