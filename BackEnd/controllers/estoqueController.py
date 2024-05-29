from flask import request
from database.db import db
from models.estoque import Estoque

def estoque_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      stock = Estoque(data['id_produto'], data['qtde'], data['valor_unitario'])
      db.session.add(stock)
      db.session.commit()
      return 'Estoque Criado'
    except Exception as e:
      return 'Estoque nao criado'
  elif request.method == 'GET':
    try:
      data = Estoque.query.all()
      return data
    except Exception as e:
      return 'Estoques nao foram buscados'
  elif request.method == 'PUT':
    try:
      data = request.get_json()
      put_estoque_id = data['id']
      put_estoque = Estoque.query.get(put_estoque_id)
      if put_estoque is None:
        return {'error': 'Estoque nao encontrado'}, 404
      put_estoque.id_produto = data.get('id_produto', put_estoque.id_produto)
      put_estoque.qtde = data.get('qtde', put_estoque.qtde)
      put_estoque.valor_unitario = data.get('valor_unitario', put_estoque.valor_unitario)
      db.session.commit()
      return 'cliente atualizado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao atualizar Estoque. erro{}'.format(e)}, 400
  elif request.method == 'DELETE':
    try:
      data = request.get_json()
      delete_estoque_id = data['id']
      delete_estoque = Estoque.query.get(delete_estoque_id)
      if delete_estoque is None:
        return {'error': 'Estoque não encontrado'}, 400
      db.session.delete(delete_estoque)
      db.session.commit()
      return 'Estoque deletado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao deletar Estoque. erro {}'.format(e)}, 400