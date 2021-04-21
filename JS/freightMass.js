function calculateMass(myArray){
	let result = myArray.reduce((sum, current) => sum + current.length, 0);
	return result;
}

const cargo = ['cat', 'dog', 'bird'];

const mass = calculateMass(cargo);
// mass should now be 10
console.log(mass);