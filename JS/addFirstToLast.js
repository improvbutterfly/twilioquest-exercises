function addFirstToLast(stringArray){
	if (stringArray.length == 0){
		return '';
	}
	else if (stringArray.length == 1){
		return stringArray[0] + stringArray[0];
	}
	else {
		return stringArray[0] + stringArray[stringArray.length-1];
	}
}