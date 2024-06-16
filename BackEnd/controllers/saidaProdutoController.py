from flask import request
from database.db import db
from models.saida_produto import Saida_produto

def saida_produto_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      productOut = Saida_produto(data['id_produto'], data['qtde'], data['valor_unitario'], data['data_saida'])
      db.session.add(productOut)
      db.session.commit()
      return 'saida do produto Criada'
    except Exception as e:
      return 'saida do produto nao realizada'
  elif request.method == 'GET':
    try:
      data = Saida_produto.query.all()
      data = {'produtosOut' : [produtoOut.to_dict() for produtoOut in data]}
      return data
    except Exception as e:
      return 'saidads de produtos nao foram buscadas'
  elif request.method == 'PUT':
    try:
      data = request.get_json()
      put_saida_id = data['id']
      put_saida = Saida_produto.query.get(put_saida_id)
      if put_saida_id is None:
        return {'error': 'saida nao encontrada'}, 404
      put_saida.id_produto = data.get('id_produto', put_saida.id_produto)
      put_saida.qtde = data.get('qtde', put_saida.qtde)
      put_saida.valor_unitario = data.get('valor_unitario', put_saida.valor_unitario)
      put_saida.data_saida = data.get('data_saida', put_saida.data_saida)
      db.session.commit()
      return 'saida de Produtos atualizada com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao atualizar saida de Produtos. erro{}'.format(e)}, 400
  elif request.method == 'DELETE':
    try:
      data = request.get_json()
      delete_saida_id = data['id']
      delete_saida = Saida_produto.query.get(delete_saida_id)
      if delete_saida is None:
        return {'error': 'saida não encontrado'}, 400
      db.session.delete(delete_saida)
      db.session.commit()
      return 'saida deletado com sucesso', 200
    except Exception as e:
      return {'error': 'erro ao deletar saida. erro {}'.format(e)}, 400