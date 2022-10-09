/*
============= There is only one Governor in the state, add static methods and 
            properties you'd expect a Governor to have.
log the properties and test the methods (don't instantiate)
*/
class Governor {
    constructor(name, age, states){
        this.name = name;
        this.age = age;
        this.states = states;
    }
    static isBusy = true;

    static greetings (greet){
        console.log(`Hello, welcome to my beautiful state!`);
    }
}
/*
Think of three properties all people share, set them with the constructor
Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
*/

// let sam = new Governor ('sam', '37', 'Maryland');
console.log(Governor.isBusy);
Governor.greetings();

class Person extends Governor{
    
}