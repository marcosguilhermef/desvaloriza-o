import json
import re
import pymongo
import pprint
import datetime
import sys

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = None
col = None
def conectar():
    if "inflacao" in myclient.list_database_names():
        print("The database exists.")

def select():
    db = myclient["inflacao"]
    col = db['Dolar']
    result = col.find()
    for doc in result:
        alterarData(doc['Data'])

def alterarData(data):
    splits = datetime.datetime.strptime(data, '%d.%m.%Y').strftime('%Y-%m-%d')
    update(splits,data)

def update(novo, antigo):
    db = myclient["inflacao"]
    col = db['Dolar']
    result = col.update({"Data": antigo}, {"$set":{"Data": datetime.datetime.strptime(novo, '%Y-%m-%d')}})  
    print(result)


conectar()
select()