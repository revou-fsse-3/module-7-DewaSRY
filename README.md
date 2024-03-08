<h1>Revou task by <bold>Dewa Surya Ariesta

## Requirement to run the project

### please set up the environment variable first

```bash
FLASK_DEBUG=True  // optional
USER_NAME= ..
PASSWORD= ..
SERVER=  ..
DB_NAME= ..

```

## How to set_up zoo_api

1. set_up Environment - `poetry config virtualenvs.in-project true` // use to make the '.env' on the repo
2. Install all Dependency - `poetry install`
3. set up the environment `poetry shell`
4. run the app -`poetry run flask run`

5 just hit the `http://127.0.0.1:5000` to see the frontend if you run the app locally

## To see the swagger ui Document

- in locale `http://127.0.0.1:5000/swagger-ui`
- in production `<YOUR_URL>/swagger-ui`

## data base set up

```bash
//comment to set_up the data base
poetry run flask db

// comment to generate migration to set_up data base
poetry run flask db migrate

// comment to get ready your data base
poetry run flask db upgrade

// comment if you are lazy
poetry run flask db migrate && poetry run flask db upgrade

```

## Folder structure

```bash
README.md
app
   |-- __init__.py
   |-- frontend // react project, if you want run the frontend separately please run `npm i ` or `pnpm install` first
   |-- zoo_api
   |   |-- model
   |   |-- schemas
   |   |-- service
   |   |-- utils
   |   |-- views
data.zip // contain the zip of data base dump
doc // its contain constant data needed to the employee and animal data base , the sql script need tu run first if you don'r wont to copy the dump on the data.zip
```
