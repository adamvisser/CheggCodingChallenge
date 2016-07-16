



function runUsernameClick(){
	//TODO the user has now clicked check so we need to make sure its not empty, else give an error
	//TODO we need to make sure that we have a list of useable usernames to send over
	//TODO we run  the request
	tellViewRequestIsLoading()
	
}



function runObservers(){
	//TODO actually flesh these out to "guess" possible usernames to send over in addition to what they check that FIRST click
	runWordObserver();
	runEmptyObserver();
}