
var Login = {


login: function(req, res, next) {
   	 	var kennung = req.body.benutzername;
    	var password = req.body.passwort;
    	console.log(kennung + " - " + password);
    	var db = req.db;
		var collection = db.get('User');
		var obj = collection.find({"kennung" : kennung},{}, function(e, usr){

			if(usr== "")
			{
				res.send("Falscher Benutzer");
			}
			else
			{
				if(usr[0].rolle == "mitarbeiter")
				{
					res.send("DU BIST EIN MITARBEITER");
				}
				else
				{
					res.send("DU BIST EIN KUDNE");
				}
			}	
		});
		}
};

	module.exports = Login;