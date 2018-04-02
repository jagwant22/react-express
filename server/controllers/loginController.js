var express = require('express');
let User = require('../models/userModel.js');
console.log("LOGIN CONTROLLER LOADED");


module.exports.user_login = (req, res) =>{
	let username = req.body.username;
	let password = req.body.password;
	let result = {};
	User.find({username:username, password:password}, (err, user)=>{
		if(user.length == 1){
			result = {
				"status" : 200,
				"result" :"SUCCESS"
			};
			res.json(result);

		}else{
			result = {
				status : 500,
				result :"FAILURE"
			};
			res.json(result);
		}
	});
	
};

