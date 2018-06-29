const AccountController = require('../controllers/UserControllers');

module.exports = (app) => {
  app.route('/userCreate')
    .post(AccountController.createUser)
  app.route('/loginUser')
    .post(AccountController.loginUser)
}