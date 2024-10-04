const age4 = 18;
//If Age is less than 18 or not can be checked this way
if (age4 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

const day = 3;
// switch: A cleaner way to handle multiple conditions.
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown day");
}

// for loop: Perfect for running tasks a known number of times.
//Each time i value increments by 1 here as we are using Increment Operator on i by saying i++
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0 1 2 3 4
}

//While also does the same but keeps running as long as a condition is true.
let k = 0;
//Initialize a Variable and give a condition and then increment each time we output
while (k < 5) {
  console.log(k); // Output: 0 1 2 3 4
  k++;
}

//Do While is similar to While but only key difference is it executes Once even when the condition is false
let j = 0;
do {
  console.log(j); // Output: 0 1 2 3 4
  j++;
} while (j < 5);

// Programmer Tip: Control structures like if/else, switch, for, and while are crucial when managing arrays, objects, and other data structures. They allow you to modify and process collections of data efficiently, which is key to building complex programs. Whenever you see control blocks, think of them as tools to organize and control the flow of executable tasks.//which all programmers does using controls, this is very useful in controlling in set of executable tasks
