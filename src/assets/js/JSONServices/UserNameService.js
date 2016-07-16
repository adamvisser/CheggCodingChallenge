



function sendRequest() {
	function proeccessRequestResponse(data){
		// This logs Trump4Pres's user data, since the username is registered, but
		// no user data for FeelTheBern1, since that username is not currently registered
		console.log("request done, logic starting");
		populateUseableUserNameList(data);
		console.log("request logic done");
	}


	// TODO use the below copied code to bring all the comments below it to life
	var url = "http://chegg-tutors.appspot.com/coding-challenge/api/user/?username=".concat(getUserNameList(true));
	console.log(url);
	$.ajax(url).done(function(data) {
		// This logs Hillary2016's user data, since the username is registered
		//console.log(JSON.stringify(data));
		//raw please thanks!!!
		console.log(data);
		proeccessRequestResponse(data);
	  });
}