var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  res.json('Jagwant');
});

router.get('/sampledata', function(req, res){
  res.json("Sample")
});
module.exports = router;
