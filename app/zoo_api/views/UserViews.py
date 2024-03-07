



from flask_smorest import Blueprint,abort
from flask.views import MethodView

from passlib.hash import pbkdf2_sha256
from flask_jwt_extended import   create_access_token
from datetime import timedelta

from app.zoo_api.model.UserModel import UserModel
from app.zoo_api.schemas import UserSchemas
from app.zoo_api.service.DbModelService import DbModelService

blp = Blueprint("user",  __name__, description="user route route ")
DBS= DbModelService(UserModel)

from app.zoo_api.utils.FlaskDb import db

@blp.route("/register")
class UserRegister(MethodView):
    
    @blp.arguments(UserSchemas)
    def post(self, user_data):
        # if db.session.execute(
        #     db.select(UserModel)
        #     .where(UserModel.username == user_data["username"])
        #     .first()):
        #     abort(409, message="A user with that username or email already exists.")
     
        if UserModel.query.filter(UserModel.username == user_data["username"]).first():
            abort(409, message="A user with that username or email already exists.")
        DBS.addModel(**user_data)
        return {"message": "User created successfully."}, 201

@blp.route("/login")
class UserLogin(MethodView):
    @blp.arguments(UserSchemas)
    def post(self, user_data):
        user = UserModel.query.filter(
            UserModel.username == user_data["username"]
        ).first()

        if user and pbkdf2_sha256.verify(user_data["password"], user.password):
            access_token = create_access_token(identity=user.userId, expires_delta=timedelta( days=7) )
            return {"access_token": access_token, }

        abort(401, message="Invalid credentials.")
