







function formIsEmpty() {
	// body...
	if (getFormValue() == "") {
		return true;
	}
	return false;
}


function getFormValue() {
	return $("#chg-balloon-input").val();
}