/*
Think of three properties all people share, set them with the constructor
Think of three methods all people share
Create a PostalWorker class that inherits from person, add some methods
Create a Chef class that inherits from person, add some methods
Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
*/

class Person {
    constructor(name, age, resident){
        this.name = name;
        this.age = age;
        this.resident = resident;
       
    }
    eat(){
       console.log( 'Eating food is essential for strength.')
     
    }
    work(){
        console.log('I am working!')

    }
    sleep(){
        console.log('Everyone needs 7-8 hours of sleep.')
    }
}

class PostalWorker extends Person{
    constructor(name, age, resident){
        super(name, age, resident)
    }

    greet() {
        console.log(`Hello, my name is ${this.name}. Welcome to our ${this.resident} office! How can i help you?`)
    }
    deliver() {
        console.log( `${this.name} is in charge of managing the ${this.resident} office.`)
    }
}

const postalWorker1 = new PostalWorker ('Sam Smith', "24", "Virginia")
const postalWorker2 = new PostalWorker ("Adam paul", "45", "Maryland")

postalWorker1.greet()
postalWorker1.deliver()

postalWorker2.greet()
postalWorker2.deliver()

console.log("====================")

class Chef extends Person{
    constructor(name, age, resident){
        super(name, age,resident)
    }
    cleaning(){
        console.log(`${this.name} like cleaning the cooking station before cooking.`)
    }
    cooking(){
        console.log(`${this.name} has his own special dish at the ${this.resident} location.`)
    }
}


const chef1 = new Chef ("Dave Rogan", "35", "Florida")
const chef2 = new Chef ("John Doe", "40", "Texas")

chef1.cleaning()
chef1.cooking()

chef2.cleaning()
chef2.cooking()