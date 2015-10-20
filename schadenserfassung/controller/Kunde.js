
var Kunde = {
login: function(req, res, next) {
		console.log(req);
		res.send("Everthing is OK");
},

authLogin: function(req, res, next) {
Kunde.login();
},
	};

	module.exports = Kunde;