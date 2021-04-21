function getFirstAmountSorted(myArray, n){
	myArray.sort();
	return myArray.slice(0, n);
}

// the terminal - they are not required for your function to work
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << should print out ['apple', 'bat']