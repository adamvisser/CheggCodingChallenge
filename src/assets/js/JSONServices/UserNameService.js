



function sendRequest(argument) {
	// TODO use the below copied code to bring all the comments below it to life
	$.ajax("/coding-challenge/api/user/?username=".concat(getUseableUserNameList(true))).done(function(data) {
		// This logs Trump4Pres's user data, since the username is registered, but
		// no user data for FeelTheBern1, since that username is not currently registered
		console.log(data);
		updateView(data);
	});
}