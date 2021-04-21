
class Ducktypium{
	constructor(color){
		if (color != "red" && color != "blue" && color != "yellow"){
			let error = new Error("Input color must be one of red, blue, or yellow");
			throw error;
		}
		else{
			this.color = color;
			this.calibrationSequence = [];
		}
	}

	refract(color){
		if (color != "red" && color != "blue" && color != "yellow"){
			throw new Error("Input color must be one of red, blue, or yellow");
		}
		else{
			if (this.color == color){
				return color;
			}
			else if (this.color == "red"){
				switch (color){
					case "blue":
						return "purple";
						break;
					case "yellow":
						return "orange";
					default:
						break;
				}
			}
			else if (this.color == "blue"){
				switch (color){
					case "red":
						return "purple";
						break;
					case "yellow":
						return "green";
					default:
						break;
				}
			}
			else if (this.color == "yellow"){
				switch (color){
					case "blue":
						return "green";
						break;
					case "red":
						return "orange";
					default:
						break;
				}
			}
			else;
		}
	}

	calibrate(numArray){
		let sortedArray = numArray.sort();
		//console.log(sortedArray);
		sortedArray.forEach((item, index, arr) => {
			//console.log(arr[index] + " " + item);
			arr[index] = item * 3;
			//console.log(arr[index] + " " + item);
		});
		//console.log(sortedArray);
		this.calibrationSequence = sortedArray;
	}

}

// The following would produce an error
try {
  const badColor = new Ducktypium('pink');
} catch(e) {
  console.log('Color must be red, yellow, or blue!');
}

// Create a new instance of the class
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]