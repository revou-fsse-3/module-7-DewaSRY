""" testing """

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)


class FlaskDb:
    """  SessionFlaskModel"""
    db:SQLAlchemy= None
    
    def getDb()-> SQLAlchemy: 
        if FlaskDb.db== None:        
            FlaskDb.db = SQLAlchemy(model_class=Base)
        return FlaskDb.db
