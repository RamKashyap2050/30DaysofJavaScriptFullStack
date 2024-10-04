//We will look in deep about How to Manipulate Strings and arrays in Day 5

//String Manipulation Methods

// The length property returns the number of characters in a string.
const name2 = "John Doe";
console.log(name2.length); // Output: 8

//charAt
//Returns the character at the specified index in a string.
const name1 = "JavaScript";
console.log(name1.charAt(0)); // Output: "J"
console.log(name1.charAt(4)); // Output: "S"

//toUpperCase and toLowerCase
//Converts all characters in a string to uppercase or lowercase.
const greeting = "Hello World";
console.log(greeting.toUpperCase()); // Output: "HELLO WORLD"
console.log(greeting.toLowerCase()); // Output: "hello world"

//includes()
//Checks if a string contains a specific substring.
const phrase = "I love JavaScript";
console.log(phrase.includes("JavaScript")); // Output: true
console.log(phrase.includes("Python")); // Output: false

//map():
// The map() method creates a new array by applying a function to each element in the original array. It's great for transforming data.
//In Day 4 as discussed every object is tracked by its key
//Consider Array of Objects as a Street of Houses, Each House has a number and key particular to that house, similarly
//Each Array has Objects each has their own key using which Object can be accessed, we go through the names using Name in array of objects
const peoplearrofobj = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 28 },
];

// Create a new array with only names
const names = peoplearrofobj.map((person) => person.name);
console.log(names); // Output: ["John", "Jane", "Jack"]

//filter():
// The filter() method creates a new array containing only elements that satisfy a given condition. Use it to filter data.
//Filter uses a X condition and uses a Key here age is key and loops around and filters according to X condition
// Find people older than 23
const adults = peoplearrofobj.filter((person) => person.age > 23);
console.log(adults); // Output: [{ name: "John", age: 25 }, { name: "Jack", age: 28 }]

//find():
//The find() method returns the first element in the array that satisfies a condition.

// Find the first person older than 23
const adult = peoplearrofobj.find((person) => person.age > 23);
console.log(adult); // Output: { name: "John", age: 25 }

//reduce():
//The reduce() method reduces the array to a single value. It can be used for summing values, finding averages, or even transforming data.
// Calculate the sum of all ages
const totalAge = peoplearrofobj.reduce((sum, person) => sum + person.age, 0);
console.log(totalAge); // Output: 75

//forEach():
//The forEach() method executes a provided function once for each array element. It’s great for looping through an array without returning a new array.
// Loop through and print each name
peoplearrofobj.forEach((person) => {
  console.log(person.name);
});
// Output:
// John
// Jane
// Jack

//Advanced String Methods
//split():
//The split() method splits a string into an array of substrings.
const sentence = "JavaScript is awesome";
const words = sentence.split(" ");
console.log(words); // Output: ["JavaScript", "is", "awesome"]

//join():
//The join() method joins an array into a single string.
const words1 = ["JavaScript", "is", "awesome"];
const sentence1 = words.join(" ");
console.log(sentence1); // Output: "JavaScript is awesome"

//Combinig Map and Filter
// Filter people older than 23 and get only their names
// You can chain filter() and map() together to first filter the data and then transform it:
const adultNames = peoplearrofobj
  .filter((person) => person.age > 23)
  .map((person) => person.name);
console.log(adultNames); // Output: ["John", "Jack"]

//Special String Methods
//slice():
const text = "JavaScript";
console.log(text.slice(0, 4)); // Output: "Java"

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 3)); // Output: [2, 3]

//indexOf():
//Returns the index of the first occurrence of a value in a string or array.
const word = "hello";
console.log(word.indexOf("l")); // Output: 2
const arr = ["apple", "banana", "cherry"];
console.log(arr.indexOf("banana")); // Output: 1

//Day 5 Challenge
const randomNumbers = [];
const arraySize = 5;

for (let i = 0; i < arraySize; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("Array", randomNumbers);
const squares = randomNumbers.filter((val) => val > 50).map((val) => val * val);
console.log("Squares", squares);
