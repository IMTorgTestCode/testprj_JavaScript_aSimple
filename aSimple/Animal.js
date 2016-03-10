






function Animal(name){

	this.MaxAnimals = 5;
	this.NumOfAnimals = 1;		// <<< broke		
	
	this._name = name;
	this._type = "NA";
	this._sound = "rooar";
	this._weight = 0;
	this._color = "gray";

}


Animal.prototype = {
	constructor: Animal,
	getName: function (){ console.log(this._name);
	},
	setSound: function(s){ this._sound = s;
	},
	getSound: function(){ console.log(this._sound);
	}
}


module.exports = Animal;
