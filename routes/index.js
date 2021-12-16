
var express = require('express');
var router = express.Router();
var motrans = require('../controllers/insert')

/* GET home page. */
router.get('/', motrans.buscar);

module.exports = router;
