
class Materializer{
	constructor(target){
		//console.log(target);
		this.target = target;
		this.activated = false;
	}

	activate(){
		//console.log("Activated");
		this.activated = true;
	}

	materialize(){
		if (this.activated == true){
			//console.log("Materialized " + this.target);
			return this.target;
		}
	}
}

let user = new Materializer("Fred");

user.activate();
let userName = user.materialize();
console.log(userName);