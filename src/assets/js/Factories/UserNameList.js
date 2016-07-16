


function setupUserNameList(){
	//since I dont have anything to act as "scope" we will pretend like its the whole window (app)
	if(window.USERNAMELIST === undefined){
		window.USERNAMELIST = {};
		window.USERNAMELIST.usernameList = [];
		window.USERNAMELIST.goodUserNames = [];
		window.USERNAMELIST.badUserNames = [];
	}
}

function userNameLength() {
	return window.USERNAMELIST.usernameList.length;
}

//this just returns a list of useable username objects, or a string for use within a request. depending on the former will depend on what it returns upon fail, not sure just yet lots to do
function getUserNameList(forRequest = false) {


	//I wanted to make sure that only this function can get called, so that it will return the proper stuff, encapsulation things.
	//this returns the list of GOOD usernames as an array
	function getUseableUserNameListForAnIteration() {
	}

	//this returns the list of usernames as a string
	function getUseableUserNameListForARequest() {
		//this is needed to actually return something
		var returnString = "";

		//lets make sure that this scope has the ability to foreach over the array we are about to create
		//without having to create the function in line
		function addUserName(item){
			console.log(item);
			returnString = returnString.concat(item);
			returnString = returnString.concat(",");
		}
		window.USERNAMELIST.usernameList.forEach(addUserName)
		returnString = returnString.substring(0, returnString.length-1)
		return returnString;
	}

	if(forRequest){
		return getUseableUserNameListForARequest();
	}else{
		return getUseableUserNameListForARequest();
	}
}





//this actually sets up, then runs the ajax request
function populateUseableUserNameListFromService() {
	// TODO check the below runs correctly
	setupUserNameList();
	if (userNameLength() < 1) {
		console.log('no useable usernames pregenerated!');
		noUseableUsernamesAddNumbers();
	}
	// TODO use the json service to send a request using the usernameList from window scope
	sendRequest();
}


//this is the fucntion that ajax calls when it successfullly recieves a response
function populateUseableUserNameList(data) {
	var inputUserNameIsAvailable = true;
	function mapDataToUserNameArray(value, index){
		return value.username;
	}
	function setupBadUserName(item){
		if (getFormValue() == item) {
			inputUserNameIsAvailable = false;
		}
		window.USERNAMELIST.badUserNames.push(String(item));
	}

	function setupGoodUserName(item){
		if (window.USERNAMELIST.badUserNames.indexOf(String(item))  == -1) {
			window.USERNAMELIST.goodUserNames.push(String(item));
		}
	}
	//dont forget you cant iterate blindly over an object like this is mongo adam!!!!
	data = $.map(data, mapDataToUserNameArray);
	// TODO check the below runs correctly
	setupUserNameList();
	data.forEach(setupBadUserName);
	window.USERNAMELIST.usernameList.forEach(setupGoodUserName);
	window.USERNAMELIST.usernameList = []
	// TODO from response put list of good usernames in place
	if (inputUserNameIsAvailable) {
		tellViewNameIsAvailable();
	} else {
		tellViewNameIsUnAvailable();
	}
	tellViewRequestIsDone(window.USERNAMELIST.goodUserNames);
}

//this is used by the form observers to add in possible names as they find them
function addNameToList(name){
	// TODO check the below runs correctly
	setupUserNameList();
	//again casing as string cuz ive put no time into error handline
	window.USERNAMELIST.usernameList.push(String(name));
}

//this is used by the ajax response function to add in names that wont work
function addNameToBadList(name){
	// TODO add in name to the list of bad user names in window scope
}


//this is used by the ajax response function to add in names that will work
function addNameToGoodList(name){
	// TODO add in name to the list of good user names in window scope
}