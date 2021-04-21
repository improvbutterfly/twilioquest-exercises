
class TargetingSolution{
	constructor(coords){
		this.x = coords['x'];
		this.y = coords['y'];
		this.z = coords['z'];
		//console.log(this.x);
	}

	target(){
		let returnCoords = "(" + this.x + ", " + this.y + ", " + this.z + ")";
		return returnCoords;
	}

/*
	materialize(){
		if (this.activated == true){
			//console.log("Materialized " + this.target);
			return this.target;
		}
	}*/
}

const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1
});

console.log(sln.target()); // Should output a string of (45, 12, -1)