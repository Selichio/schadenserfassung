// Export some model methods

exports.processLogin = function(user, pass, cb) {
	var err = null
	console.log("Model Kunde: processLogin")
	var returnuser
	if( user == "Dennis" && pass == "geheim")
	{
	  cb(err, {vorname: user, rolle : "kunde"});

	}
	else
	{
		err = "HUreNSOHN alles falsch"
		cb(err, null);

	}
};
