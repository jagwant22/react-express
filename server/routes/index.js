var express = require('express');
var router = express.Router();
const user = require('./users.js');
// Main Router File. 
// Import all routes here and map them to specific apis
router.get('/test', function(req, res, next) {
  res.json('Testing /api call');
});

router.get('/sampledata', function(req, res){
	let jsondata = {
		test: "1",
		kratos : "2"
	}
  res.json(jsondata)
});

router.use('/user', user)

module.exports = router;
