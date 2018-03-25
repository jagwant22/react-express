var express = require('express');
let User = require('../models/userModel.js');
console.log("LOGIN CONTROLLER LOADED");
verifyLogin = (username, password) =>{
	User.find({username:username, password:password}, (err, user)=>{
		if(user.length > 0){
			return true;		
		}else{
			return false;
		}
	});
};

module.exports.user_login = (req, res) =>{
	let username = req.query.username;
	let password = req.query.password;
	let verification = verifyLogin(username, password);
	if (verification == true){
		res.json({
			status : 200,
			result :"SUCCESS"
		});
	}else{
		res.json({
			status : 500,
			result :"FAILURE"
		});
	}
};

