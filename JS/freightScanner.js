function scan(myArray){
	let contraband = 0;
	for (var i = 0; i < myArray.length; i++){
		if (myArray[i] == 'contraband'){
			contraband++;
		}
	}
	return contraband;
}

const cargo = ['contraband', 'apples', 'cats', 'contraband', 'contraband'];

const scannedCargo = scan(cargo);
// scannedCargo should now be 3
console.log(scannedCargo);