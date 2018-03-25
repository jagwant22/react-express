var express = require('express');
var loginRouter = express.Router();
let login_controller = require('../controllers/loginController');

loginRouter.post('/', login_controller.user_login);

module.exports = loginRouter;
