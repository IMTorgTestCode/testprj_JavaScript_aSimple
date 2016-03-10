
var Animal = require('./Animal.js')

function Dog(name){
	Animal.call(this, name);
	
	this._sound = 'bark';
}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;




module.exports = Dog;
