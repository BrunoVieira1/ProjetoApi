from flask import request
from database.db import db
from models.funcionario import Funcionario

def auth_controller():
  if request.method == 'GET':
    try:
      data = request.get_json()
      print(data['cpf'])
      funcionario = Funcionario.query.filter_by(cpf=data['cpf'], senha=data['senha'])
      print(funcionario)
      return 'e'
    except Exception as e:
      return 'erro'