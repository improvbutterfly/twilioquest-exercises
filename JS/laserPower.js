function calculatePower(myArray){
	let result = myArray.reduce((sum, current) => sum + current*2, 0);
	return result;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24