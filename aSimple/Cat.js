
var Animal = require('./Animal.js')

function Cat(name){
	Animal.call(this, name);
	
	this._sound = 'meeow';
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;




module.exports = Cat;
