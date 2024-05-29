from controllers.funcionarioController import funcionario_controller

def funcionarios(app):
  app.route('/funcionarios', methods=['POST','GET', 'PUT', 'DELETE'])(funcionario_controller)