


function setupUserNameList(){
	//since I dont have anything to act as "scope" we will pretend like its the whole window (app)
	if(window.USERNAMELIST === undefined){
		window.USERNAMELIST = {};
		window.USERNAMELIST.usernameList = {};
		window.USERNAMELIST.goodUserNames = {};
		window.USERNAMELIST.badUserNames = {};
	}
}


//this just returns a list of useable username objects, or a string for use within a request. depending on the former will depend on what it returns upon fail, not sure just yet lots to do
function getUseableUserNameList(forRequest = false) {
	if(forRequest){
		return getUseableUserNameListForARequest();
	}else{
		return getUseableUserNameListForARequest();
	}
}

//this returns the list of useable usernames as a string
function getUseableUserNameListForAnIteration() {
}

//this returns the list of useable usernames as a string
function getUseableUserNameListForARequest() {
}



//this actually sets up, then runs the ajax request
function populateUseableUserNameListFromService() {
	// TODO check the below runs correctly
	setupUserNameList();
	// TODO use the json service to send a request using the usernameList from window scope
	// TODO upon recieve of response, remove all from usernameList
	// TODO from response put list of bad usernames in place
	// TODO from response put list of good usernames in place
	// TODO return object of useable user names
}


//this is the fucntion that ajax calls when it successfullly recieves a response
function populateUseableUserNameList() {
	// TODO check the below runs correctly
	setupUserNameList();
	// TODO from response put list of bad usernames in place
	// TODO from response put list of good usernames in place
	// TODO return object of useable user names
}

//this is used by the form observers to add in possible names as they find them
function addNameToList(name){
	// TODO add in name to usernameList in window scope
}

//this is used by the ajax response function to add in names that wont work
function addNameToBadList(name){
	// TODO add in name to the list of bad user names in window scope
}


//this is used by the ajax response function to add in names that will work
function addNameToGoodList(name){
	// TODO add in name to the list of good user names in window scope
}