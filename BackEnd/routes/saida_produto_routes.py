from controllers.saidaProdutoController import saida_produto_controller

def saidaProdutos(app):
  app.route('/saidaProdutos', methods=['POST','GET', 'PUT', 'DELETE'])(saida_produto_controller)