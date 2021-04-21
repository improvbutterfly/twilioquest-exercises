function scan(myArray){
	let contraband = [];
	for (var i = 0; i < myArray.length; i++){
		if (myArray[i] == 'contraband'){
			contraband.push(i);
		}
	}
	return contraband;
}

const cargo = ['contraband', 'apples', 'cats', 'contraband', 'contraband'];

const scannedCargo = scan(cargo);
// scannedCargo should now be [0, 3, 4]
console.log(scannedCargo);