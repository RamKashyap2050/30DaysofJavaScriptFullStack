// Understanding why console.log is used can be very important in debugging while using JavaScript, 
// as it helps figure out what is wrong or just allows you to see output in the terminal or browser's console.
// In Chrome, you can open the Console by right-clicking and selecting "Inspect", then going to the Console tab.

console.log("I am Starting 30 Days of JavaScript Full Stack");

// This is how you comment in JavaScript for a single line using "//".

/* This is how you can
   comment multiple lines 
   in JavaScript */

// Age is something that can be changed, whereas name cannot be changed once assigned (you technically can, but it can cause bugs).
let age = 25;
const name = "John";

// In JavaScript, String, Number, and Boolean are primitive data types, whereas Object and Array are considered objects.
let myString = "John";
let myNumber = 42;
let myBoolean = true;
let myObject = { name: "John", age: 25 };
let myArray = ["Apple", "Banana", "Cherry"];

// JavaScript differentiates between a String and Number using `" "`. Let's look at an example:

const age1 = "36";  // This is a string
const age2 = 36;    // This is a number

// This console will output "3636" because JavaScript concatenates the string and number, treating both as strings.
console.log(age1 + age2);

const truth = true;
// This will console "true".
console.log(truth);

// Accessing object properties using dot notation.
const person = { name: "John", age: 25 };
console.log(person.name); // Outputs: John
console.log(person.age);  // Outputs: 25

// Arrays start at index 0 and go up to n. The structure looks like this: [0, 1, 2, 3, ...., n]
const fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);  // Outputs: Apple
console.log(fruits[1]);  // Outputs: Banana
console.log(fruits[2]);  // Outputs: Cherry
