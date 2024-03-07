"""model type """
from typing import  TypeVar

from app.zoo_api.utils.FlaskDb import db

"""test"""
ModelType= TypeVar("ModelType", bound= db.Model)