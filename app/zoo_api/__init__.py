from flask import Flask,jsonify
from flask_smorest import Api
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from app.zoo_api.views import (
    AnimalViewBluePrint,
    EmployeeViewBluePrint, 
    UserViewsBluePrint)
from app.zoo_api.utils import (db, get_sql_phat)
from app.zoo_api.model import (
    RoleModel,
    GenderModel,
    ScheduleModel,
    SpeciesModel,
)

def create_app(db_url=None):
    app = Flask(__name__,static_url_path="/",static_folder="../frontend/dist")
    app.config["API_TITLE"] = "Zoo REST API "
    app.config["API_VERSION"] = "v0"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or get_sql_phat()
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["JWT_SECRET_KEY"]="WkmpquACbmiuS7gd" 
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    jwt= JWTManager(app)
    db.init_app(app)
    migrate = Migrate(app, db)


    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return (
            jsonify({"message": "The token has expired.", "error": "token_expired"}),
            401,
        )

    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return (
            jsonify(
                {"message": "Signature verification failed.", "error": "invalid_token"}
            ),
            401,
        )

    @jwt.unauthorized_loader
    def missing_token_callback(error):
        return (
            jsonify(
                {
                    "description": "Request does not contain an access token.",
                    "error": "authorization_required",
                }
            ),
            401,
        )

    with app.app_context():
        db.create_all()
        db.session.add_all([
            GenderModel("Male"),
            GenderModel("Female"),
            GenderModel("Mental ill")
        ])
        db.session.add_all([
            SpeciesModel("Reptiles"),
            SpeciesModel("Mammals"),
            SpeciesModel("Invertebrates"),
            SpeciesModel("Amphibians"),
            SpeciesModel("Insect"),
            SpeciesModel("Fish"),
            SpeciesModel("Bird"),
        ])
        db.session.add_all([
            ScheduleModel("Morning"),
            ScheduleModel("Middle day"),
            ScheduleModel("Afternoon"),
        ])
        
        db.session.add_all([
            RoleModel("Animal keeper"),
            RoleModel("Manager"),
            RoleModel("Cleaner"),
        ])
        db.session.commit()
    api = Api(app)
    
    api.register_blueprint(AnimalViewBluePrint)
    api.register_blueprint(EmployeeViewBluePrint)
    api.register_blueprint(UserViewsBluePrint)
    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    return app

