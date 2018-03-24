var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Jagwant');
});

router.get('/sampledata', function(req, res){
  res.json("Sample")
});

router.post('/login', function(req, res){
	console.log("Request Receieved");
	console.log(req.body.username);
	console.log(req.body.password);
	res.send("Success");
})
module.exports = router;
