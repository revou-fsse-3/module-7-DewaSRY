

from os import path,getcwd

DERIVE_NAME= "mysqlconnector"
USER_NAME="root"
PASSWORD="Dewa12346645"
SERVER="localhost:3306"
DB_NAME="module_7"

my_sql=f"mysql+{DERIVE_NAME}://{USER_NAME}:{PASSWORD}@{SERVER}/{DB_NAME}"



def getSqlPhat():
    """alternative db for db in locale"""
    basedir = path.join(getcwd(), "app", "data")
    dbPhat='sqlite:///' + path.join(basedir, 'data.db')
    return dbPhat




