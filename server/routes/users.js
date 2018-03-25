var express = require('express');
var UserRouter = express.Router();
const User = require('../models/userModel');



UserRouter.post('/',(req, res) => {
	try{
		let username = req.body.username;
		let password = req.body.password;
	
		let user_object = new User({'username' : username, 'password': password});
	
	
	
		user_object.save();
		res.status(200).send(user_object);
	}catch(err){
		res.status(500).send({result : 'FAILURE', reason:err.toString()});
	}
});

module.exports = UserRouter;