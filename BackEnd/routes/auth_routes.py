from controllers.authController import auth_controller

def auths(app):
  app.route('/auth', methods=['POST'])(auth_controller)