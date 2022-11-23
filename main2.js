// Continuation of JS Control Flow
// Switch Cases
// if this is the case... do this

let day = new Date().getDay();
// Gives the number of the day of the week. Sunday being 0, Saturday is 6

let literal_day = new Date().toString()

console.log(day)
console.log(literal_day)

// Switch Case 
switch (day) {
    case 0:
        console.log("It's Sunday, I'm makin waffles!")
        break;
    case 1:
        console.log("It's Monday! What are you doin in me Swamp?")
        break;
    case 2:
        console.log("It's Taco Tuesday!")
        break;
    case 3:
        console.log("It's Wednesday my dudes nuaahahhhhh")
        break;
    case 4:
        console.log("It's Friday Eve! Yay")
        break;
    case 5:
        console.log("Gotta get down on Friday!")
        break;
    case 6:
        console.log("5 hours of summer once a week, ONE SATURDAY MORNING!")
        break;
    default: //In case none of the cases are hit
        console.log("What happened here?")
}

// literal Day Example with Switch Case Syntax
// ProTip: use these in the weekend project!
switch (literal_day.split(" ")[0]){
    case 'Sun':
        console.log("Drink coffee and do Sunday Stuff")
        break;
    case 'Mon':
        console.log("Drink and Game")
        break;
    case 'Tue':
        console.log("Existential Dread... also tacos")
        break;
    case 'Wed':
        console.log("It's Wednesday my dudes nuaaahhhhhh")
        break;
    case 'Thu':
        console.log("THIRSTY THURSDAY stay hydrated homies")
        break;
    case 'Fri':
        console.log("20 bucks is 20 bucks")
        break;
    case 'Sat':
        console.log("Cherish me my child, for I will not last beyond the setting sun")
        break;
    default:
        "Where are you that has other days of the week? Unless its Thursday, then lmk what the abbreviation is"
}

// Creation of JS Objects
// -- Simple JS Object --

let person = {
    name: 'Buddy',
    age: 36,
    fav_color: 'green'
}

// Accessing Data in our Object -- there are 2 ways
// Also note that this is the data structure of an api
console.log(person['name'])
console.log(person.age)

// Complex Object in JS

let person2 = {
    name: 'Arthur',
    age: 10,
    prog_languages: ['JavaScript', 'Python', 'Aardvark', 'Java'],
    fav_color: 'yellow',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hocky: 'Chicago BlackHawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjackets']
        },
        {
            baseball: 'Toronto BlueJays',
            football: 'Seattle Seahawks',
            basketball: 'Toronto Raptors',
            soccer: ['Manchester City', 'Wrexham']
        }
    ]
}

console.log(person2.prog_languages[2]) //Aardvark
console.log(person2.teams[1].soccer[0])

// -- JS Object Prototype Methods --
console.log(Object.keys(person2))
console.log(Object.values(person2))
console.log(Object.entries(person2))

// Bad, Wrong way of looping in JS:
for (let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// The Good way of doing it - looking for keys
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

for (let i = 0; i < Object.keys(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}
// If the value of the key is an array, we loop through it, console logging every value

// We can create an object prototype which is like a python class
// use a constructor function to create an object based on the prototype

// Creation of Our Object Prototypes  -- ES5 Method Syntax -- since this is the old way, 
// we get the little squiggles under Car because it wants us to do it the new way
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // A method inside of our prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year} ${this.make} ${this.model} that has
        ${wheels} wheels and the color is ${color}`);
        return 'Returned value'
    }
}

// Creating an instance of a prototype (instantiating)
let my_car = new Car('Mazda', '3', 2015)
my_car.printInfo(4, 'Blue')

// In modern (ES6) JS, we can use classes which are pretty much the same as classes in python but of course different syntax

class Human {
    // This is like our __init__
    constructor(name, age, allergies){
        this.name = name;
        this.age = age;
        this.allergies = allergies;
    }
    printInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nAllergies: ${this.allergies}`
    }
}
// instantiating link as a Human
let link = new Human('Link', 118, 'evil');
console.log(link.printInfo())

// JS Inheritance using Classes
class Baby extends Human {
    constructor(name, age, allergies, walking){
        super(name, age, allergies);
        this.walking = walking;
    }
    isBabyWalking(){
        if (this.walking == true){
            return `Oh lawd, ${this.name} is comin!`
        }else{
            return `${this.name} isn't walking yet, thank god...`
        }
    }
}

let little_johnnie = new Baby('Lil Johnnie', 1, 'Peanuts', true)
console.log(little_johnnie.printInfo())
console.log(little_johnnie.isBabyWalking())

// --JavaScript Closure-- //
/**
 * 
 * A closure is a self-invoking function that only runs once.
 * it can then set a variable(which in our case will be a counter) and 
 * returns a function expression
 * 
 * For the example below, we will add to a number after the 
 * initial call to the closure has been made 
 * 
 * JavaScrupt Closures are another type of variable that can be created
 */
let count_up = (function(){
    let counter = 0; // this is a variable that is locked to the scope of our function (just like in python, this is nothing new)
    console.log('Hit')
    console.log(counter)
    return function(){console.log(counter)
     return counter ++}
})()

count_up()
count_up()
count_up()
// I think since this is a self calling function, it doesn't reset the counter when called or something

let addNames = (function () {
    let names = [];
    console.log('Adding Names')
    return function(name){
        console.log(names)
        return names.push(name)
    }
})()

// -- JavaScript Callbacks -- //

/**
 * 
 * A callback is a function that is to be executed after another function
 * has finished its execution -- hence the name callback
 * 
 * In JavaScript, functions are objects. Because of this, functions can take
 * other functions as arguments(parameters and can return functions by
 * other functions
 * 
 * Functions that do this are called "higher-order functions". Any function
 * that is passed as an argument is called a "Callback Function"
 * 
 * POR QUE?
 * 
 * Porque of the JavaScript Event Loop. In a nutshell, Javascript is
 * an event driven language which means instead of waiting for a response
 * Javascript will keep executing while listening for the other events
 * 
 */

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

function first_delay(){
    // simulate delay
    setTimeout(function(){
        console.log(1)
    }, 3000)
}

function second_delay(){
    console.log(2)
}

// first_delay()
// second_delay()

//  callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`)
    callback()
}

// doHomework('JavaScript', function(){
//     console.log('Done with homework')
// })
// In this example, the function does not run until the first thing is complete. You have to hit the okay
// button for done with homework to show up
// unlike the example above in which the functions just run at the same time

/*
Though callbacks give us more functionaloty...they also introduce their own 
problem......Callback Hell

Something that looks like this:
function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
})

*/

//We solve callback hell with promises
const isEvenNumber = (num) => {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0){
            resolve(num)
        }else{
            reject(num)
        }
    })
}

// Using a JS promise
isEvenNumber(10)
    // Happy good resolver path
    .then((result)=>{
        console.log(`Even Number: ${result}`)
    })
    // Sad Reject path
    .catch((error)=>{
        console.log(`Odd Number: ${error}`)
    })

// function to add a number slowly
function slow_addition(n1, n2){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(n1+n2), 5000) // 5000 is a 5000ms delay
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// increase_slow_salary(50000, 10000)
// async says it needs to wait for something else to complete before running without this, our function gets stuck waiting
// why? no idea. JS be weird. we were calling the function but there was no result yet so we just get stuck. It's trying to set the 
// variables / the result but there is no value from the slow_addition yet
// this way, slow_addition runs first and when it gives a result, then increase salary can run essentially
// This is used a lot when doing api calls
async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase)
    console.log(`The new salary is: ${new_salary}`)
    return new_salary
}
async_increase_salary(50000, 10000)