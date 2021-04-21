function scanAndFilter(myArray, myString){
	let result = myArray.filter(words => {
		if (words != myString){
			return words;
		}
	});
	return result;
}

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];

const filteredCargo = scanAndFilter(cargo, 'ray guns');
// filteredCargo should now be ['apples', 'oranges', 'tacos']
console.log(filteredCargo);