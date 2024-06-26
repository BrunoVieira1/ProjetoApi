from routes.produto_routes import produtos
from routes.entrada_produto_routes import entradaProdutos

from routes.saida_produto_routes import saidaProdutos
from routes.funcionario_routes import funcionarios
from routes.auth_routes import auths


def default_routes(app):
  produtos(app)
  entradaProdutos(app)
  saidaProdutos(app)
  funcionarios(app)
  auths(app)