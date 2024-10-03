//Basic Syntax of Array of Objects looks like this, [{key:"Value",key:"Value"},{key:"Value",key:"Value"}.....]
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Jack", age: 28 },
];

//Accesing Array of Objects is done using their respective Keys
console.log(people[0].age); //Output: 25
console.log(people[1].name); //Output:"Jane"

//To Access a Value attributing to a common key across a seris of object
//Such as consier name which is present across all objects in Array
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

//Output will be
// John
// Jane
// Jack

//You can use forEach for more modern approach
people.forEach((person) => {
  console.log(person.name);
});

//Output will be
// John
// Jane
// Jack

//You can add an object by using Push method
people.push({ name: "Jill", age: 24 });
console.log(people[3]);

//You can remove the last element of array of objects using pop()
let lastPerson = people.pop();
console.log(people);

//You can Modify it by
people[0].age = 26; // Changing John's age to 26
console.log(people[0].age); // Output: 26
