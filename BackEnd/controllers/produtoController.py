from flask import request
from database.db import db
from models.produto import Produto

def produto_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      product = Produto(data['nome'], data['marca'], data['descricao']) 
      db.session.add(product)
      db.session.commit()
      return 'Produto Criado'
    except Exception as e:
      return 'Produto nao criado'
  elif request.method == 'GET':
    try:
      data = Produto.query.all()
      return data
    except Exception as e:
      return 'produtos nao foram buscados'
  elif request.method == 'PUT':
    try:
      data = request.get_json()
      put_produto_id = data['id']
      put_produto = Produto.query.get(put_produto_id)
      if put_produto is None:
        return {'error': 'Produto nao encontrado'}, 404
      put_produto.nome = data.get('nome', put_produto.nome)
      put_produto.marca = data.get('marca', put_produto.marca)
      put_produto.descricao = data.get('descricao', put_produto.descricao)
      db.session.commit()
      return 'cliente atualizado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao atualizar produto. erro{}'.format(e)}, 400
  elif request.method == 'DELETE':
    try:
      data = request.get_json()
      delete_produto_id = data['id']
      delete_produto = Produto.query.get(delete_produto_id)
      if delete_produto is None:
        return {'error': 'produto não encontrado'}, 400
      db.session.delete(delete_produto)
      db.session.commit()
      return 'produto deletado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao deletar produto. erro {}'.format(e)}, 400