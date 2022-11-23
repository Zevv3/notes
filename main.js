// Basics of JavaScript

/**
 * This is a multiline comment in JS (DocString)(idk if theyre called docstrings in JS but you get it)
 * Today we will go over:
 * -- Variable Declaration 
 * -- Primitive dataTypes
 *      strings, integers, booleans, floats, arrays, objects (like dicts in python)
 * -- Functions
 * -- Loops
 */

// Variable Declaration
// var, let, const

// var - lenient scope where we can always reassign the variable

// let - somewhat lenient scope - we can reassign the variable without the let keyword
    // let name = Kelsey
    // we can then do name = something else but cant do let name = something else

// const - Strict, once variable is declared it can not be reassigned

// String Variable
var first_name = "Bill";
//The semicolon at the end denotes the end of a statement or a line
// When we finish denoting a variable or defining a function, we put the ; at the end
// It won't break anything on the current version of JS but it is convention, it's like punctuation
// Display our value to the JS Console
console.log(first_name)
// There is an extension for JS that may allow this to be seen in the terminal in VScode but apparently it is jank
// so instead we gotta open index.html in live server and go to console in the developer panel thing

// Integer Variable
var num = 31;
//Display
console.log(num)

//Float variable
var some_float = 3.14;
console.log(some_float)

//Array
var some_array = [1, 2, 3, 4]
console.log(some_array)

//object
var some_obj = {'test': 'Please Test Me!'}
console.log(some_obj)

//JS Hoisting Example
console.log(random_variable)
// this will give an error since we have not defined the variable
var random_variable = 'This is a random string'
// JS compiles at the same time, doesn't read top to bottom like python
// Here we get undefined because it knows it exists but it hasn't been defined yet
console.log(random_variable)
// now it will give us the value back
// A better way of declaring a variable is using let of const
let fullName = first_name + ' The Pony'
console.log(fullName)
// const
const superHero = 'Iron Man'
console.log(superHero)
// superHero = 'Black Panther'
// this give this error:
// main.js:65 Uncaught TypeError: Assignment to constant variable.
// at main.js:65:11
// const superHero = 'Spider-Man'
// This one will give an error in vs code saying you cannot reassign block-scoped variable

let nbaGoat = 'Michael Jordan'
console.log(nbaGoat)
// let nbaGoat = 'Kobe Bryant' will give block scoped assignment error
nbaGoat = 'Kobe Bryant'
console.log(nbaGoat)
// The above will work though
// We can do something like this
let robot;
robot = 'Mega Man'
console.log(robot)

/**
 * Basic Math Operations in JS
 * 
 */
// addition
let sum = 5 + 5;
console.log(sum)
// Subtraction
let diff = 10 - 5;
console.log(diff)
// Multiplication
// And some other examples of functionality
let prod = 5 * 5;
console.log(prod)
prod = prod * 10;
console.log(prod)
prod *= 10;
console.log(prod)
// Division
let quotient = prod / 100;
console.log(quotient)
// Exponential
let square = 67 ** 2;
console.log(square)
// More Math Operations
// Finding the floor of a decimal
let find_floor = Math.floor(26.7)
console.log(find_floor)
// Finding the ceiling of a decimal
let find_ceil = Math.ceil(15.6)
console.log(find_ceil)
// Mind Bender ...?
let crazyStuff = some_float + '4'
console.log(crazyStuff)
// This will treat the float as a string, concatenate, and return a string of 3.144
let crazyStuff2 = some_float + parseFloat('4')
console.log(crazyStuff2)
// This converts '4' to a float and adds - like doing float(4) in python 

/**
 *  ==== JS Functions =====
 */
// Regular Named Functions
function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2
}

console.log(addNums())

// Variable Named Function with Parameters
let addNums2 = function(num, num2){
    console.log("This is a variable named function with parameters")
    return num + num2
}
console.log(addNums2(4, 10))

// ES6+
/*
    Using an arrow function WITHOUT parentheses can only be done in 
    functions with ONE parameter
    These are nice because you dont need the function keyword
*/

let cubed = num => {
    return num ** 3
}
console.log(cubed(9))

let addNums3 = (num1, num2) =>{
    return num1 + num2
}
console.log(addNums3(5, 12))

// Self-Invoking Function
// JS Closure
/**
 * Our Console Log in the below example does NOT have to be provided
 * We care using it just ot see the output
 * We create the function and call it at the same time
 */
console.log((function(name){
    let hello = 'Hello World, ' + name;
    return hello
})('Lando'))

// JS Control Flow
// If Statement
function determineAge(age){
    if (age < 18){
        return 'Minor'
    } else if (age >= 18 && age <= 65){
        return 'Adult'
    } else if (age > 65 && age <= 106){
        return 'Elderly'
    } else{
        return "Maiar (That's what Gandalf is)"
    }
}
console.log(determineAge(234))
console.log(determineAge(31))

// JS Ternary Operator
// Give the condition and then what to return
// This is essentially if elif else
function determine_age(age){
    return (age < 18) ? 'Minor' : (age >= 18 && age <= 65) ? 'Adult' : 'Elderly'
}
console.log(determine_age(17))

// Loops in JS - For Loop
// For Loop syntax: for keywork(counter; condition; incrementation/decrementation)
// ++ defaults to +1 but you can do +2, +3, etc.
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
}
countByOne();

let my_list = ['Steve', 'Raul', 'Tarun', 'Teddie'];

function printNames(aList){
    for (let i =0; i < aList.length; i++){
        console.log(aList[i])
    }
}
printNames(my_list)

function printNames2(aList){
    for(let i in aList){
        console.log(aList[i])
    }
}
printNames2(my_list)

function decreaseByOne(){
    for (let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decrementation has stopped'
}
console.log(decreaseByOne())

// While Loop
function countWithWhile(){
    let i = 0;
    let text = '';
    // while loop
    while (i < 10){
        text += `This number is....${i}` // note that the `` are the graves next to the 1, not ''
        i++
    }
    return text
}
console.log(countWithWhile())

// Do While Loop
function count_with_do_while(){
    let i = 0;
    let text = ''
    // Do
    do{
        text += `The number above is....${i} \n`
        i++
    }
    while (i < 10)
    return text
}
console.log(count_with_do_while())

/**
 * looping with Arrays and Array methods and String methods
 */

let group_of_names = ['Gary', 'Ash', 'Misty', 'Brock', 'Officer Jenny']

// Index for the first position - Gary
console.log(group_of_names[0])

// Deconstruction of an Arry
let gary, ash, misty;
[gary, ash, misty] = group_of_names
// This is doing... gary = group_of_names[0]
// ash = group_of_names[1]
// misty = group_of_names[2]
console.log(gary)
console.log(ash)
console.log(misty)

// Two ways for looping over an array
// one
function show_all_names(){
    for (let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
}
show_all_names()
// two
function show_each_name(){
    group_of_names.forEach(
        name => console.log(name)
    )
}
// This is like doing for x in array... for name in array console.log(name)
show_each_name()

// JS String Methods
Array.toString()
console.log(group_of_names)
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

// some JS Array Methods: .map(), .filter(), .reduce()
// .map()
let b_names = group_of_names.map(i=>{
    if (i[0] == 'B'){
        return i
    }else{
        return false
    }
})
console.log(b_names)
// returns [false, false, false, 'Brock', false] because it maps to the array
// This one is kind of like map(), kinda what is going on behind the scenes of .map()
let b_test_names = function(arr){
    b_array = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] == 'B'){
            b_array.push(arr[i]) //This adds to an array
        }
    }
    return b_array
}
console.log(b_test_names(group_of_names))

// .reduce()
const nums = [2, 4, 6, 8, 10]
let nums_reduced = nums.reduce((accumulator, current_num)=>{
    return accumulator + current_num
})
console.log(nums_reduced)
// index 0 is the accumulator by default
// all the other numbers just get added to that and it holds the total value

// .filter()
let longish_names = group_of_names.filter(name=>name.length > 4)
console.log(longish_names)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(group_of_names.join(", "))

console.log(group_of_names.slice(0, 3))

// .splice()
let captured_value = group_of_names.splice(0, 1, 'Freddie')
console.log(`This was removed based on our splice: ${captured_value}`)
console.log(group_of_names)

function replace_new_names(arr){
    // for loop to get all names
    // and replace at even indeces
    for (let i = 0; i < arr.length; i++){
        if(i%2==0){
            arr.splice(i, 1, 'Goku')
        }
    }
    return arr
}
console.log(replace_new_names(group_of_names))

// .search() in a string, returns the index at which the searched term appears in the string
// So here, we are only searching the string 'Gary'
console.log(group_of_names[0].search('G'))

// .includes()
console.log(group_of_names.includes('Goku'))

let num_list = [4, 6, 7, 8, 10]
if (num_list.includes(4)){
        console.log('it is here! The four you were looking for!')
}else{
    console.log('it is not here :(')
}

console.log(group_of_names.filter( name => name.toLowerCase().includes('o')))

// String.slice()
console.log(group_of_names[1].slice(0, group_of_names[1].length))