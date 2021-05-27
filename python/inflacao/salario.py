import json
import re
import pymongo
import pprint
import datetime
import pytz
import sys

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
db = None
col = None
meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
def conectar():
    if "inflacao" in myclient.list_database_names():
        print("The database exists.")

def select():
    db = myclient["inflacao"]
    col = db['Salario']
    result = col.find()
    for doc in result:
        mes = str(meses.index(doc['Período'].lower())+1)
        ano = doc['ano']
        data = mes+'-'+ano
        splits = datetime.datetime.strptime(data, '%m-%Y').strftime('%m-%Y')
        data = { "Período": doc['Período'], "ano": ano}
        update(splits,data)

        #alterarData(doc['Data'])

def update(novo, antigo):
    db = myclient["inflacao"]
    col = db['Salario']
    print(antigo)
    result = col.update(
        {
            "Período": antigo["Período"], 
            "ano": antigo["ano"]
        }, 
        {
            "$set":
                {
                    "Data": datetime.datetime.strptime(novo, '%m-%Y')
                }
        })  
    print(result)


conectar()
select()