// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
if (argumentValue % 3 == 0 && argumentValue % 5 == 0){
	console.log("JavaScript");
}
else if (argumentValue % 3 == 0){
	console.log("Java");
}
else if (argumentValue % 5 == 0){
	console.log("Script");
}
else{
	console.log(argumentValue);
}