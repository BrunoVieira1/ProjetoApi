from flask import request
from database.db import db
from models.funcionario import Funcionario

def auth_controller():
  if request.method == 'GET':
    try:
      data = request.get_json()
      print(data)
      funcionario = Funcionario.query.filter_by(cpf=data[0], senha=data[1])
      if funcionario:
        return funcionario
      else:
        return 'erro'
    except Exception as e:
      return 'erro'