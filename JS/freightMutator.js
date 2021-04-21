function mutate(myArray){
	let result = myArray.map(words => words.toUpperCase());
	return result;
}

const cargo = ['apples', 'ray guns', 'oranges'];

const mutatedCargo = mutate(cargo);
// mutatedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']
console.log(mutatedCargo);