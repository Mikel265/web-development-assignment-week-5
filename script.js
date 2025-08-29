
//Part 1: Variables, Conditionals

const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = document.getElementById("userAge").value;

  if (age >= 18) {
    ageResult.textContent = "✅ You are eligible to vote!";
  } else {
    ageResult.textContent = "❌ Sorry, you are too young to vote.";
  }
});


// Part 2: Functions

// Function to calculate total
function calculateTotal(a, b) {
  return a + b;
}

// Function to format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript learning.`;
}

document.getElementById("sumBtn").addEventListener("click", () => {
  let total = calculateTotal(5, 10);
  document.getElementById("sumResult").textContent = "Total = " + total;
  console.log(greetUser("Mikel")); // Example of 2nd function
});


// Part 3: Loops

const listBtn = document.getElementById("listBtn");
const fruitList = document.getElementById("fruitList");

listBtn.addEventListener("click", () => {
  fruitList.innerHTML = ""; // clear before adding
  let fruits = ["Mango", "Banana", "Apple", "Orange"];

  // Example 1: for loop
  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }

  // Example 2: forEach loop in console
  fruits.forEach(fruit => console.log("I like " + fruit));
});


// Part 4: DOM Manipulation

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

toggleBtn.addEventListener("click", () => {
  toggleText.classList.toggle("highlight");
});
