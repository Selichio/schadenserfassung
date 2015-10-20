var express = require('express');
var router = express.Router();

/* Controller */
var Kunde = require("../controller/Kunde");
var Mitarbeiter = require("../controller/Mitarbeiter");
var Login = require("../controller/Login");



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'SEKO Schadenserfassung' 

  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { 
  	title: 'Login' 

  });
});



module.exports = router;

/* MITARBEITERPAGES */




/* KUNDENPAGES */
/* GET home page. */
router.get('/kndlogin', function(req, res, next) {
	res.render('index');
});
router.post('/login', Login.login);


module.exports = router;
