
var Mitarbeiter = {

login: function(req, res, next) {
		var db = req.db;
		console.log(req.body);

		res.send("Everthing is OK");
		}
};

	module.exports = Mitarbeiter;