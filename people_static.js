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

//I USED THIS CONSOLE LOG IS TO SEPARATE THE 2 CLASSES, (to make it more visible for you)
console.log("")

class Chef extends Person{
    constructor(name, age, resident){
        super(name, age,resident)
    }
    cleaning(){
        console.log(`${this.name} like cleaning the kitchen before cooking.`)
    }
    cooking(){
        console.log(`Chef ${this.name} has his own special dish at the ${this.resident} location.`)
    }
}

const chef1 = new Chef ("Dave Rogan", "35", "Florida")
const chef2 = new Chef ("John Doe", "40", "Texas")

chef1.cleaning()
chef1.cooking()

chef2.cleaning()
chef2.cooking()