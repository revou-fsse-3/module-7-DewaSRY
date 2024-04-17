from flask_smorest import Blueprint, abort
from flask.views import MethodView
from flask_jwt_extended import jwt_required
from http import HTTPStatus
from app.zoo_api.model.animal_model import AnimalModel
from app.zoo_api.schemas import AnimalSchemasWithId,AnimalSchemas
from app.zoo_api.service.db_mode_service import DbModelService
from sqlalchemy.exc import SQLAlchemyError


DBS= DbModelService(AnimalModel)


blp = Blueprint("Animals", __name__, description="Animal route ")

@blp.route("/animal")
class AnimalsViews(MethodView):
    
    @blp.response(HTTPStatus.OK, AnimalSchemasWithId(many=True), description="halloo")
    def get(self):
        return DBS.getDbModalAll()
    
    @jwt_required()
    @blp.arguments(AnimalSchemas)
    @blp.response(HTTPStatus.CREATED, AnimalSchemasWithId)
    def post(self ,item_data):
        try:
            return DBS.addModel(**item_data)
        except Exception as  E:
            abort(HTTPStatus.NOT_ACCEPTABLE, message="error while insert the animal")
        

@blp.route("/animal/<string:item_id>")
class AnimalViews(MethodView):
        
    @blp.response(HTTPStatus.OK, AnimalSchemasWithId)
    def get(self, item_id):
        return DBS.getDbModal(item_id)
   
    @jwt_required()
    @blp.arguments(AnimalSchemas)
    @blp.response(HTTPStatus.ACCEPTED, AnimalSchemasWithId)
    def put(self ,item_data,item_id):
        print(item_data)
        try:
            return DBS.updateDbModel(item_id,item_data)
        except SQLAlchemyError as  E:
            abort(HTTPStatus.NOT_ACCEPTABLE, message="error while update the animal")
            
    @jwt_required()   
    def delete(self,item_id ):
        DBS.deleteDbModal(item_id)
        return {"message": "Item deleted."}, HTTPStatus.ACCEPTED

