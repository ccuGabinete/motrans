
var express = require('express');
var router = express.Router();
var insert = require('../controllers/insert')
var find = require('../controllers/find')

/* GET home page. */
router.post('/buscar', find.buscar);
router.post('/inserir', insert.inserir);
router.post('/alterar', find.alterar);
router.post('/remover', find.remover);

module.exports = router;
