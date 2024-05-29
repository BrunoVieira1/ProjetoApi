from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Estoque(db.Model):
  def to_dict(self):
    return {
      'id': self.id,
      'id_produto': self.id_produto,
      'qtde': self.qtde,
      'valor_unitario': self.valor_unitario
    }
  id = db.Column(db.Integer, primary_key = True)
  id_produto = db.Column(ForeignKey('produto.id'))
  qtde = db.Column(db.Integer)
  valor_unitario = db.Column(db.Float)

  produto = relationship('Produto', backref='estoque')

  def __init__(self, id_produto, qtde, valor_unitario):
    self.id_produto = id_produto
    self.qtde = qtde
    self.valor_unitario = valor_unitario
