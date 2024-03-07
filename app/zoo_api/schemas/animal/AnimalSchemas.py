from marshmallow import Schema, fields

class AnimalSchemas(Schema):
    __name__="base animal schemas"
    name= fields.Str()
    age= fields.Int()
    gender=fields.Str()
    species=fields.Str()
    
class AnimalSchemasWithId(AnimalSchemas):
    __name__="animal schemas with id"
    animalId= fields.UUID(dump_only=True)


