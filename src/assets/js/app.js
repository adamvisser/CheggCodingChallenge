



function runUsernameClick(){
	//TODO the user has now clicked check so we need to make sure its not empty, else give an error
	if (!formIsEmpty()) {
		populateUseableUserNameListFromService();
		tellViewRequestIsLoading();
	} else {
		console.log(getFormValue());
		tellViewInputIsEmpty()
	}
	
}



function runObservers(){
	//TODO actually flesh these out to "guess" possible usernames to send over in addition to what they check that FIRST click
	runWordObserver();
	runEmptyObserver();
}

function setupApp(){

	// The User search API accepts a comma-separated list of usernames, and returns
	// user data for any matching records
	$.ajax("http://chegg-tutors.appspot.com/coding-challenge/api/user/?username=Hillary2016").done(function(data) {
		// This logs Hillary2016's user data, since the username is registered
		//console.log(JSON.stringify(data));
		//raw please thanks!!!
		console.log(data);
	  });
	$.ajax("http://chegg-tutors.appspot.com/coding-challenge/api/user/?username=Trump4Pres,FeelTheBern1").done(function(data) {
		// This logs Trump4Pres's user data, since the username is registered, but
		// no user data for FeelTheBern1, since that username is not currently registered
		//console.log(JSON.stringify(data);
		//raw please thanks!!!
		console.log(data);
	  });
	$("#chg-balloon-input").change(function() {
		// This is where you come in!!
		//i came in like a wrecking ball
		console.log('ran observers');
		runObservers();
	});
	$("#chg-balloon-submit").click(function() {
		// This is where you come in!!
		//i came in like a wrecking ball
		console.log('click ran');
		runUsernameClick();
	});
}