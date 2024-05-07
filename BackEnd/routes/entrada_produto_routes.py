from controllers.entradaProdutoController import entradaProduto_controller

def entradaProdutos(app):
  app.route('/entradaProdutos', methods=['POST','GET', 'PUT', 'DELETE'])(entradaProduto_controller)