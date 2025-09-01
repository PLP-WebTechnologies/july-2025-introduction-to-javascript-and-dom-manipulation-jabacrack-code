//============================
// Part 1: Variables & Conditionals
// ============================

let userName = "Kelvin";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ============================
// Part 2: Functions
// ============================

// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Check even or odd number
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return num + " is even.";
  } else {
    return num + " is odd.";
  }
}

console.log(greetUser(userName));
console.log(checkEvenOdd(7));

// ============================
// Part 3: Loops
// ============================

// Example 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Number: " + i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While Loop Count: " + count);
  count++;
}

// ============================
// Part 4: DOM Interactions
// ============================

// 1. Change text when button clicked
document.getElementById("btnShow").addEventListener("click", function () {
  document.getElementById("message").textContent = greetUser(userName);
});

// 2. Change background color of page
document.getElementById("btnChange").addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// 3. Add numbers to the list using a loop
document.getElementById("btnLoop").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});
