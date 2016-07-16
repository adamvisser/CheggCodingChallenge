


function tellViewRequestIsLoading() {
	//TODO we add in a "were loading" message for the user
}

function tellViewRequestIsDone(names) {
	var newHTML = ""
	function addToIterateArray(name) {
		newHTML = newHTML.concat("<i class='green checkmark box icon'></i>".concat( name, "</br>"));
	}
	names.forEach(addToIterateArray);
	$("#username-suggestion-view").html(newHTML);
}

function tellViewInputIsEmpty() {
	// body...
}



function tellViewNameIsAvailable(){
	var newHTML = "<i class='green checkmark box icon'></i>".concat(getFormValue() );
	newHTML = newHTML.concat(", is Available! Hit next to proced (or normally where the programmer would just auto move on to the next part)");
	$("#username-availability").html(newHTML);
}

function tellViewNameIsUnAvailable(){
	var newHTML = "<i class='red checkmark box icon'></i>".concat(getFormValue());
	newHTML = newHTML.concat(", is Un-available! Please try a suggestion from below or try a new username!");
	$("#username-availability").html(newHTML);
}