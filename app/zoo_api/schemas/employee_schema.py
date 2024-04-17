from marshmallow import Schema, fields

class EmployeeSchemas(Schema):
    __name__="base employee schemas"
    role= fields.Str()
    schedule= fields.Str()
    name=fields.Str()
    email= fields.Str() 
    phone= fields.Str()


class EmployeeSchemasWithId(EmployeeSchemas):
    __name__="Employee schemas with id"
    employeeId= fields.UUID(dump_only=True)

