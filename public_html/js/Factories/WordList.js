//TODO implement this out to actually check for words, instead of just being all "hey look i can add 2 numbers at the end"



function finalWordCheck() {
	// TODO before we send off the request, make sure we have enough user names being sent of in the request
	// TODO make sure the below gets called at the right time, and works
}

function noUseableUsernamesAddNumbers(){
	// TODO we havent done so well and have no words to use to generate some good words, just add some numbers to whats in the form :(
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