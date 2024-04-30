from database.db import db


class Funcionario(db.Model):
  def to_dict(self):
    return {
      'id': self.id,
      'nome': self.nome,
      'cpf': self.cpf,
      'cargo': self.cargo,
      'senha': self.senha
    }
  id = db.Column(db.Integer, primary_key = True)
  nome = db.Column(db.String(100))
  cpf = db.Column(db.Integer)
  cargo = db.Column(db.String(100))
  senha = db.Column(db.String(100))

  def __init__(self, nome, cpf, cargo, senha):
    self.nome = nome
    self.cpf = cpf
    self.cargo = cargo
    self.senha = senha