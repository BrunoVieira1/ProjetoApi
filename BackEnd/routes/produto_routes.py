from controllers.produtoController import produto_controller

def produtos(app):
  app.route('/produtos', methods=['POST','GET'])(produto_controller)