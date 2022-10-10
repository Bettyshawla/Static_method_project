/*
============= There is only one Governor in the state, add static methods and 
            properties you'd expect a Governor to have.
log the properties and test the methods (don't instantiate)
*/
class Governor {
    
    static nameIs = "Larry Hogan"; 
    static dateOfBirth = "May 25, 1956";
    static party = "Republican Party";


    static greetings (greet){
        console.log(`Hello, welcome to my beautiful state!`);
    
    }

    static serving(){
        console.log('Larry Hogan is the 62nd governor of Maryland.')
    }
}

//properties
console.log(Governor.nameIs);
console.log(Governor.dateOfBirth);
console.log(Governor.party);

//methods
Governor.greetings();
Governor.serving();
