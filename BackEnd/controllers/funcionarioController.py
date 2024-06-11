from flask import request
from database.db import db
from models.funcionario import Funcionario

def funcionario_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      employee = Funcionario(data['nome'], data['cpf'], data['cargo'], data['senha'])
      db.session.add(employee)
      db.session.commit()
      return 'funcionario Criado'
    except Exception as e:
      return 'funcionario nao criado'
  elif request.method == 'GET':
    try:
      data = Funcionario.query.all()
      data = {'funcionarios' : [funcionario.to_dict() for funcionario in data]}
      return data
    except Exception as e:
      return 'funcionarios nao foram buscados'
  elif request.method == 'PUT':
    try:
      data = request.get_json()
      put_funcionario_id = data['id']
      put_funcionario = Funcionario.query.get(put_funcionario_id)
      if put_funcionario is None:
        return {'error': 'funcionario nao encontrado'}, 404
      put_funcionario.nome = data.get('nome', put_funcionario.nome)
      put_funcionario.cpf = data.get('cpf', put_funcionario.cpf)
      put_funcionario.cargo = data.get('cargo', put_funcionario.cargo)
      put_funcionario.senha = data.get('senha', put_funcionario.senha)
      db.session.commit()
      return 'cliente atualizado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao atualizar funcionario. erro{}'.format(e)}, 400
  elif request.method == 'DELETE':
    try:
      data = request.get_json()
      delete_funcionario_id = data['id']
      delete_funcionario = Funcionario.query.get(delete_funcionario_id)
      if delete_funcionario is None:
        return {'error': 'funcionario não encontrado'}, 400
      db.session.delete(delete_funcionario)
      db.session.commit()
      return 'funcionario deletado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao deletar funcionario. erro {}'.format(e)}, 400