

from os import environ, getcwd,path


USER_NAME=environ.get('USER_NAME')
PASSWORD=environ.get('PASSWORD')
DB_NAME=environ.get('DB_NAME')
SERVER=environ.get('SERVER')


my_sql=f"mysql+mysqlconnector://{USER_NAME}:{PASSWORD}@{SERVER}/{DB_NAME}"



def get_sql_phat():
    """alternative db for db in locale"""
    basedir = path.join(getcwd(), "app", "data")
    dbPhat='sqlite:///' + path.join(basedir, 'data.db')
    return dbPhat