var express = require('express');
let db = require('../utils/db')
var router = express.Router();

/* Rota principal usando a view index.ejs */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Depoimentos' });
});

router.get('/depoimento/listar', function(req, res){
  let cmd = 'SELECT id, nome, depoimento, email FROM depoimento';
   db.query(cmd, [], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.render('depoimentos-lista', {resultado: listagem});
   });
});

router.get('/depoimento/add', function(req, res){
    res.render('depoimentos-add');
});

router.post('/depoimento/add', function(req, res){
  let nome = req.body.nome;
  let depoimento = req.body.depoimento;
  let email = req.body.email;
  let cmd = 'INSERT INTO depoimento (nome, depoimento, email) VALUES(?, ?, ?);';
   db.query(cmd, [nome, depoimento, email], function(erro, listagem){
    if (erro){
      res.send(erro);
    }
    res.redirect('/depoimento/listar');
   });
});

module.exports = router;
