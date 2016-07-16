//TODO implement this out to actually check for words, instead of just being all "hey look i can add 2 numbers at the end"



function finalWordCheck() {
	// TODO before we send off the request, make sure we have enough user names being sent of in the request
	// TODO make sure the below gets called at the right time, and works
}

function noUseableUsernamesAddNumbers(){
	// TODO we havent done so well and have no words to use to generate some good words, just add some numbers to whats in the form :(


	//lets make sure that this scope has the ability to foreach over the array we are about to create
	//without having to create the function in line
	function addRandomUserName(item){
		addNameToList(formWord.concat(item));
	}

	console.log('O No! observers found no words, adding numbers so we have some now');
	//first we need some numbers
	//lets make sure they dont have a way of being the same!!!!
	var randomNumber = Math.floor( Math.random() * 1000 );
	var randomModifer = Math.floor( Math.random() * 100 );
	var randomDivider = Math.floor( Math.random() * 10 );
	var randomNumbers = [
		string(randomNumber),
		string(randomNumber + randomModifer),
		string(randomNumber - randomModifer),
		string((randomNumber + randomModifer) / randomDivider ),
		string((randomNumber - randomModifer)  / randomDivider ),
	]
	//then we need to get the username itself, gonna cast as string cuz... i have no error handling like anywhere in here and im scared
	var formWord = string(getFormValue());
	randomNumbers.forEach(addRandomUserName);
}

//one of the observers may have found a new word to use, check for it then add it in
function addWordToUseableWordsList(word){
	// TODO make the above comment come true
}

function getUseableWordsList(){
	// TODO 
}

function setupWordsList(){
	//since I dont have anything to act as "scope" we will pretend like its the whole window (app)
	if(window.WORDOBSERVER === undefined){
		window.WORDOBSERVER = {};
		window.WORDOBSERVER.wordlist = {};
	}
}