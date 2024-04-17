

from flask_smorest import Blueprint,abort
from flask.views import MethodView
from flask_jwt_extended import jwt_required
from http import HTTPStatus


from app.zoo_api.schemas import EmployeeSchemas,EmployeeSchemasWithId
from app.zoo_api.model.employee_model import EmployeeModel
from app.zoo_api.service.db_mode_service import DbModelService
from sqlalchemy.exc import SQLAlchemyError
blp = Blueprint("employees",  __name__, description="employees route ")
DBS= DbModelService(EmployeeModel)

@blp.route("/employee")
class EmployeesViews(MethodView):
    
    @blp.response(HTTPStatus.OK, EmployeeSchemasWithId(many=True))
    def get(self):
        return DBS.getDbModalAll()
    @jwt_required()
    @blp.arguments(EmployeeSchemas)
    @blp.response(HTTPStatus.CREATED, EmployeeSchemasWithId)
    def post(self ,item_data):
        try:
            return DBS.addModel(**item_data)
        except SQLAlchemyError as  E:
            print(E._message)
            abort(HTTPStatus.NOT_ACCEPTABLE, message="error while insert the Employee")
        
@blp.route("/employee/<string:item_id>")
class AnimalViews(MethodView):
    @jwt_required()  
    @blp.response(HTTPStatus.OK, EmployeeSchemasWithId)
    def get(self, item_id: str):
       return DBS.getDbModal(item_id)
    @jwt_required()
    @blp.arguments(EmployeeSchemas)
    @blp.response(HTTPStatus.ACCEPTED, EmployeeSchemasWithId)
    def put(self ,item_data,item_id):
        try:
            return DBS.updateDbModel(item_id,item_data)
        except SQLAlchemyError as  E:
            abort(HTTPStatus.NOT_ACCEPTABLE, message="error while update the Employee")
            
    @jwt_required()
    def delete(self,item_id ):
        DBS.deleteDbModal(item_id)
        return {"message": "Item deleted."}
