function construct(myString){
	let myObject = {     // an object
		name: myString,
		material: 'human',	
		assemble: true,
		duration: 1000
	};
	return myObject;
}

console.log(construct('George'));