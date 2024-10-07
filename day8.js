//Currying
// Currying is a technique in JavaScript where a function, instead of taking all arguments at once, takes them one by one. It transforms a function that takes multiple arguments into a series of functions that take one argument at a time.
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const result = multiply(2)(3)(4); // Output: 24
console.log(result);

//Recursion
function factorial(n) {
  if (n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Output: 120

//Event Listeners
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("Button clicked!");
});

//Event Loop
console.log("Start");

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

//Output
// Start
// End
// This runs after 2 seconds

//Promises
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

//Async/Await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();

//Closures
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

//Challenge for Day 8
// (1)Uses currying to create a function that compares three numbers and returns greatest .
function greatestOfThree(a) {
  return function (b) {
    return function (c) {
      if (a >= b && a >= c) {
        return a;
      } else if (b >= a && b >= c) {
        return b;
      } else {
        return c;
      }
    };
  };
}

greatestOfThree(1)(2)(3); //Output:3

// (2) Implements recursion to calculate the nth Fibonacci number.

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// (3)Attaches an event listener to a button that toggles the visibility of a section of text.
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  document.getElementById("spantxt").innerHTML = "Click Me to Hide me";
});
const spantxt = document.getElementById("spantxt");

spantxt.addEventListener("click", function () {
  spantxt.style.display = "none";
});
//Async/Await
async function fetchRestAPI() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    document.getElementById("CountriesList").innerHTML = data
      .map((country) => `<li>${country.name.common}</li>`)
      .join("");
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchRestAPI();
