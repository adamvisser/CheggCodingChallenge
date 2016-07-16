


function tellViewRequestIsLoading() {
	//TODO we add in a "were loading" message for the user
}

function tellViewRequestIsDone(names) {
	function addToIterateArray(name) {
		var htmlToAdd = "<i class='red checkmark box icon'></i>".concat( name, "</br>");
		var currentHTML = $("#username-suggestion-view").html();
		//this rerenders all the things and its probably pretty horrible for sure
		$("#username-suggestion-view").html(currentHTML.concat(htmlToAdd));
	}
	data.forEach(names);
}

function tellViewInputIsEmpty() {
	// body...
}