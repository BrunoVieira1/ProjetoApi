from flask import request, render_template
from database.db import db
from models.produto import Produto

def produto_controller():
  if request.method == 'POST':
    try:
      data = request.get_json()
      print(data)
      product = Produto(data['descricao'])
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