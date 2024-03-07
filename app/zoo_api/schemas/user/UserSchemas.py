
from marshmallow import Schema, fields


class UserSchemas(Schema):
    __name__="user base schemas"
    username= fields.String(required=True)
    password= fields.String(required=True, load_only=True)