var express = require('express');
var router = express.Router();
const user = require('./users.js');
// Main Router File. 
// Import all routes here and map them to specific apis

router.use('/user', user);
router.use('/login', require('./login.js'));

module.exports = router;
