from database.db import db

class Produto(db.Model):
  def to_dict(self):
    return {
      'id': self.id,
      'nome': self.nome,
      'marca': self.marca,
      'descricao': self.descricao,
      'qtde': self.qtde
    }
  
  id = db.Column(db.Integer, primary_key = True)
  nome = db.Column(db.String(100))
  marca = db.Column(db.String(100))
  descricao = db.Column(db.String(100))
  qtde = db.Column(db.Integer)

  def __init__(self, nome, marca, descricao, qtde):
    self.nome = nome
    self.marca = marca
    self.descricao = descricao
    self.qtde = qtde