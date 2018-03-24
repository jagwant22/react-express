var express = require('express');
var UserRouter = express.Router();
const User = require('../models/userModel');

UserRouter.route('/user')
	.get((req, res) => {
		console.log("Request Receieved");
	let username = req.body.username;
	let password = req.body.password;

	User.find({username:username, password:password}, (err, user)=>{
		console.log(user);
		if(user){
			res.send("Success");		
		}else{
			res.send("Failure");
		}
	})
	})
	.post((req, res) => {
		console.log(req.body);
	})

