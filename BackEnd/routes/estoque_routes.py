from controllers.estoqueController import estoque_controller

def estoques(app):
  app.route('/estoques', methods=['POST','GET', 'PUT', 'DELETE'])(estoque_controller)