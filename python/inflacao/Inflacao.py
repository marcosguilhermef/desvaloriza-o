import pandas as pd
import json
import re
import pymongo
import datetime
import sys
myclient = pymongo.MongoClient("mongodb://localhost:27017/")
print(myclient.list_database_names())
db = None

print(sys.argv)
def returnMonth(mes):
    meses = {
        'janeiro':      1,
        'fevereiro':    2,
        'março':        3,
        'abril':        4,
        'maio':         5,
        'junho':        6,
        'julho':        7,
        'agosto':       8,
        'setembro':     9,
        'outubro':      10,  
        'novembro':     11,
        'dezembro':     12
    }
    return meses[mes]
def conectar():
    if "inflacao" in myclient.list_database_names():
        print("The database exists.")
    else:
        db = myclient["inflacao"]
        col = db['IPCAmensalJaniero1980Fevereiro2021']
        insert = {  
            "name": "IPCA - Variação mensal ( [janeiro 1980 a fevereiro 2021])",
            "create_at": datetime.datetime.now(),
            "IPCA": [

            ]
        }
        x = col.insert_one(insert)
        print(print(x.inserted_id))

def select(mes, ano, fulldate, taxa):
    db = myclient["inflacao"]
    col = db['IPCAmensalJaniero1980Fevereiro2021']
    result = col.update_one({ "name": "IPCA - Variação mensal ( [janeiro 1980 a fevereiro 2021])" }, {
        "$set": { "updated_at" : datetime.datetime.now()},
        "$push": { 
            "IPCA" : {
                "data":
                {
                    "fulldate": datetime.datetime(int(ano), returnMonth(mes), 1),
                    "mes": mes, 
                    "ano": ano
                    }, 
                    "taxa": taxa
                    } 
                }
    })
    print(result)

conectar()
file = './IPCA - Variação mensal ( [janeiro 1980 a fevereiro 2021]).tsv'
tsv_read = pd.read_csv(file,sep='\t')
interation = 0
#print(tsv_read['agosto 2013'][0])
for interation in tsv_read:
    column = interation.split()
    valor  = tsv_read[interation]
    select(taxa = valor[0], fulldate = interation, mes = column[0], ano = column[1])
    print(interation, ' : ', valor[0]) 