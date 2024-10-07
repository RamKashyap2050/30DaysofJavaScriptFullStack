// script.js

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading on form submission

    // Get the input values
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;

    // Output the result to the DOM
    const output = document.getElementById("output");
    output.innerHTML = `<h2>Hello, ${name}!</h2><p>You are ${age} years old.</p>`;
  });

// script.js

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 20 },
];

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById("nameInput").value;
    const age = parseInt(document.getElementById("ageInput").value);

    // Filter users older than the input age
    const olderUsers = users.filter((user) => user.age > age);

    // Output the result to the DOM
    const output = document.getElementById("output");
    output.innerHTML = `<h2>Hello, ${name}!</h2><p>You are ${age} years old.</p>`;

    if (olderUsers.length > 0) {
      output.innerHTML += "<h3>Users older than you:</h3><ul>";
      olderUsers.forEach((user) => {
        output.innerHTML += `<li>${user.name} (${user.age} years old)</li>`;
      });
      output.innerHTML += "</ul>";
    } else {
      output.innerHTML += "<p>No users are older than you.</p>";
    }
  });
