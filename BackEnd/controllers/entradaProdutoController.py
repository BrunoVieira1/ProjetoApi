from flask import request
from database.db import db
from models.entrada_produto import Entrada_produto

def entrada_produto_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      productEntry = Entrada_produto(data['id_produto'], data['qtde'], data['valor_unitario'], data['data_entrada'])
      db.session.add(productEntry)
      db.session.commit()
      return 'Entrada do produto Criada'
    except Exception as e:
      return 'Entrada do produto nao realizada'
  elif request.method == 'GET':
    try:
      data = Entrada_produto.query.all()
      return data
    except Exception as e:
      return 'Entradads de produtos nao foram buscadas'
  elif request.method == 'PUT':
    try:
      data = request.get_json()
      put_entrada_id = data['id']
      put_entrada = Entrada_produto.query.get(put_entrada_id)
      if put_entrada_id is None:
        return {'error': 'Entrada nao encontrada'}, 404
      put_entrada.id_produto = data.get('id_produto', put_entrada.id_produto)
      put_entrada.qtde = data.get('qtde', put_entrada.qtde)
      put_entrada.valor_unitario = data.get('valor_unitario', put_entrada.valor_unitario)
      put_entrada.data_entrada = data.get('data_entrada', put_entrada.data_entrada)
      db.session.commit()
      return 'Entrada de Produtos atualizada com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao atualizar Entrada de Produtos. erro{}'.format(e)}, 400
  elif request.method == 'DELETE':
    try:
      data = request.get_json()
      delete_entrada_id = data['id']
      delete_entrada = Entrada_produto.query.get(delete_entrada_id)
      if delete_entrada is None:
        return {'error': 'Entrada não encontrado'}, 400
      db.session.delete(delete_entrada)
      db.session.commit()
      return 'Entrada deletado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao deletar Entrada. erro {}'.format(e)}, 400