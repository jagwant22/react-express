var express = require('express');
var UserRouter = express.Router();
const User = require('../models/userModel');


UserRouter.get('/', (req, res) => {
		console.log("Request Receieved");
		let username = req.query.username;
		let password = req.query.password;
		console.log(username);
		console.log(password);
		User.find({username:username, password:password}, (err, user)=>{
			console.log(user);
			if(user.length > 0){
				res.sendStatus(200);		
			}else{
				res.sendStatus(404);
			}
		})
		});

UserRouter.post('/',(req, res) => {
	console.log("Trying to create a user");
	try{
	let username = req.body.username;
	let password = req.body.password;
	console.log("Username : " + username);
	console.log("Password : " + password );
	
		let user_object = new User({"username" : username, "password": password});
		console.log(user_object);	
	
	
	
	user_object.save();
	res.status(200).send(user_object);
	}catch(err){
		res.status(500).send({result : "FAILURE", reason:err.toString()})
	}
})

module.exports = UserRouter;