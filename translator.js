function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, language) {
this.planet = homePlanet;
this.language = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
    console.log(hello[this.language]); //speaker
    return hello[sb.language]; //listener
  }

SentientBeing.prototype = {};
SentientBeing.prototype.sayHello = sayHello;
function Klingon(){
	this.parent= "SentientBeing";
}
function Romulan(){
	this.parent= "SentientBeing";
}
function Human(){
	this.parent= "SentientBeing";
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
Klingon.prototype = new SentientBeing("Qo\"nos", "klingon");
Romulan.prototype = new SentientBeing("Romulus", "romulan");
Human.prototype = new SentientBeing("Earth", "federation standard");

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Romulan()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
assert((new Romulan()).sayHello(new Human()) === "hello",
  "the human should hear hello");
assert((new Klingon()).sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");
assert((new Klingon()).sayHello(new Human()) === "hello",
  "the human should hear hello");
