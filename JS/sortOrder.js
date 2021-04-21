// The line of code below reads in the value of the argument passed in after
// the name of your script
const firstValue = process.argv[2];
const secondValue = process.argv[3];

// This line of code converts the argument to a numeric value
if (firstValue.toLowerCase() < secondValue.toLowerCase()){
	console.log(-1);
}
else if (firstValue.toLowerCase() === secondValue.toLowerCase()){
	console.log(0);
}
else{
	console.log(1);
}