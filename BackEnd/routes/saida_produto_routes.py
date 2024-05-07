from controllers.saidaProdutoController import saidaProduto_controller

def saidaProdutos(app):
  app.route('/saidaProdutos', methods=['POST','GET', 'PUT', 'DELETE'])(saidaProduto_controller)