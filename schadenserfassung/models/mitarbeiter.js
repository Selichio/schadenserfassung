// Export some model methods

exports.processLogin = function(user, pass, cb) {
	var err = null
	console.log("Model Mitarbeiter: processLogin")
	var returnuser
	if( user == "Alex" && pass == "geheim")
	{
	  cb(err, {vorname: user, rolle : "mitarbeiter"});

	}
	else
	{
		err = "User Informationen stimmen nicht überein"
		cb(err, null);

	}
};
