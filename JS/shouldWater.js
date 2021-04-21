// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue1 = process.argv[2];
const argumentValue2 = process.argv[3];

// This line of code converts the argument to a numeric value
if (argumentValue1 == 0 && argumentValue2 > 10){
	console.log("WATER");
}
