const prompt = require("prompt-sync")();
let fs = require("fs");

// 1. Conditional Statements (if-else)
console.log("\n(1️) Conditional Statements (if-else)");
let age = parseInt(prompt("Enter your age: "));
if (age < 18) {
  console.log("You get a 20% discount!");
} else if (age >= 18 && age <= 65) {
  console.log("Normal ticket price applies.");
} else {
  console.log("You get a 30% senior discount!");
}

// 2. Variables (var and const)
console.log("\n(2) Variables (var and const)");
const length = parseFloat(prompt("Enter the length of the rectangle: "));
const width = parseFloat(prompt("Enter the width of the rectangle: "));
const area = length * width;
console.log(`The area of the rectangle is ${area}`);

// 3. Objects and Properties
console.log("\n(3) Objects and Properties");
const product1 = {
  name: "Laptop",
  price: 65000,
  inStock: true,
};

const product2 = {
  name: "Headphones",
  price: 1500,
  inStock: false,
};

const product3 = {
  name: "Smartphone",
  price: 30000,
  inStock: true,
};

console.log(product1);
console.log(product2);
console.log(product3);

// 4. Arrays
console.log("\n(4) Arrays");
const guestList = ["Aman", "Sneha", "Ravi", "Neha", "Shubham"];
let guestName = prompt("Enter your name to check the guest list: ");
if (guestList.includes(guestName)) {
  console.log(`Welcome to the party ${guestName}!`);
} else {
  console.log("Sorry, you're not on the guest list");
}

// 5. JSON (JavaScript Object Notation)
console.log("\n(5) JSON");

fs.readFile("weatherInfo.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  let weatherData = JSON.parse(data);
  console.log("Weather Data:", weatherData);
});

// Response

// Weather Data: [
//   {
//     date: '18-06-2025',
//     temperature: 26,
//     condition: 'Sunny',
//     humidity: 65
//   },
//   {
//     date: '19-06-2025',
//     temperature: 28,
//     condition: 'Partly Cloudy',
//     humidity: 70
//   },
//   {
//     date: '20-06-2025',
//     temperature: 30,
//     condition: 'Rainy',
//     humidity: 80
//   }
// ]