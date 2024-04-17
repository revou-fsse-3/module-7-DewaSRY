"""model type """
from typing import  TypeVar

from app.zoo_api.utils.flask_db import db

"""test"""
ModelType= TypeVar("ModelType", bound= db.Model)