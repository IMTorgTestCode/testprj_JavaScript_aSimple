


// REFERENCES
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input




var prompt = require('prompt');


var Animal = require('./Animal.js');
var Dog = require('./Dog.js');
var Cat = require('./Cat.js');





console.log("Hello World");
console.log("\nWhat is your dog's name?");

prompt.start();

  prompt.get(['dogName'], function (err, result) {
    if (err) { return onErr(err); }
    Fido = new Dog(result.dogName);
    Fido.getSound();

    var Fluffy = new Cat("Fluffy");
    Fluffy.getSound();

  });


  function onErr(err) {
    console.log(err);
    return 1;
  }







