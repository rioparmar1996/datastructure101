//reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

object1 === object2;
object1 === object3;
// line 7 will be false becz object2 is reffrencing at object1 so its true but object3.value is true not whole object.
// objects are reffrence type

//context vs scope

function sum() {
	var a = a + 0;
}
// if you want to access a console.log(a) this will through an error becz its scoped to function so first you have to access the function and then the value of a.

function a() {
	console.log(this);
}
//this will return the current window or the current value this.varable.
//This is really important

//Instantiation
//copy of the object and reuse the code
// the below code is  create a class name player with the constructor function
// which will run every time when we make a copy of the class.
// the constructor will create name and type property to the player class
//${this.name} to access property & value.
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi i am ${this.name}, I'm a ${this.type}`);
	}
}
// creating a player as Wizard
// we use extends property from Player
// always use constructor and super() to pass the values to parent class and we can access it.
// try to console.log(this) before and after super class
// thier will be error for before super() becz its asked to reffer the constructure at parent first
// but if we but after then it will return the wizards object with values and propert of wizards 1, wizards2
class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
	}
	play() {
		console.log(`Weeeeee I'm a ${this.type}`);
	}
}

//creating wizards
const wizards1 = new Wizard("Shelly", "Healer");
const wizards2 = new Wizard("Shawn", "Dark Magic");

// here we notice that wizards are able to access both methods in PLayer and Wizards class.
// this key takes value from new wizard to super class Player where the values can be access.
wizards1.introduce();
wizards1.play();
