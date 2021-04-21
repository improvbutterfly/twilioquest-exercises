// The line of code below reads in the value of the argument passed in after
// the name of your script
const argumentValue = process.argv[2];

// This line of code converts the argument to a numeric value
if (argumentValue == 0){
	console.log("alive");
}
else if (argumentValue == 1){
	console.log("flowering");
}
else if (argumentValue == 2){
	console.log("shedding");
}
else{
	console.log("other");
}