from database.db import db

class Produto(db.Model):
  def to_dict(self):

    return{
      'id': self.id,
      'descricao': self.descricao
    }
  
  id = db.Column(db.Integer, primary_key = True)
  nome = db.Column(db.String(100))
  marca = db.Column(db.String(100))
  descricao = db.Column(db.String(100))

  def __init__(self,nome, marca, descricao):
    self.nome = nome
    self.marca = marca
    self.descricao = descricao