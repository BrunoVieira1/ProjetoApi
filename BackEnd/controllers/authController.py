from flask import request
from database.db import db
from models.funcionario import Funcionario

def auth_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      data = data['data']
      print(data)
      data = Funcionario.query.filter_by(cpf=data['cpf'], senha=data['senha'])
      data = {'funcionarios' : [funcionario.to_dict() for funcionario in data]}
      print(data)
      if data['funcionarios'] != []:
        return data
      else:
        return "null"
    except Exception as e:
      return {'error': ' Erro {}'.format(e)}, 400