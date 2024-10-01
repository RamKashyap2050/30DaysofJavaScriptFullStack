// Operators

// Let's look into multiple kinds of operators and what they do

// Arithmetic Operators perform mathematical operations like Addition, Subtraction, Multiplication, Division, and Modulus
let x = 10;
let y = 5;

console.log(x + y); // Addition -> 15
console.log(x - y); // Subtraction -> 5
console.log(x * y); // Multiplication -> 50
console.log(x / y); // Division -> 2
console.log(x % y); // Modulus (Remainder) -> 0

// Assignment Operators assign and modify variable values
let z = 20;
z += 5; // Equivalent to z = z + 5 -> 25
z -= 3; // Equivalent to z = z - 3 -> 22
z *= 2; // Equivalent to z = z * 2 -> 44
z /= 4; // Equivalent to z = z / 4 -> 11

// Relational Operators (also known as Comparison Operators) compare one variable to another
let a = 10;
let b = 20;

console.log(a == b); // Equal to -> false
console.log(a != b); // Not equal to -> true
console.log(a > b); // Greater than -> false
console.log(a < b); // Less than -> true
console.log(a >= 10); // Greater than or equal to -> true

// Logical Operators are often used for conditional checks and produce Boolean output
let c = true;
let d = false;

console.log(c && d); // AND -> false (Both C and D should be true)
console.log(c || d); // OR -> true (Either C or D should be true)
console.log(!c); // NOT -> false (Negates the value of C)

// String Operators
let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName); // Concatenation -> "John Doe"

// The Ternary Operator is a shorthand for control structures like if/else, which we will cover in the next session
const age = 42;
age == 42 ? console.log("Age Matched") : console.log("Age not matched");
