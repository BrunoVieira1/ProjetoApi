from controllers.entradaProdutoController import entrada_produto_controller

def entradaProdutos(app):
  app.route('/entradaProdutos', methods=['POST','GET', 'PUT', 'DELETE'])(entrada_produto_controller)