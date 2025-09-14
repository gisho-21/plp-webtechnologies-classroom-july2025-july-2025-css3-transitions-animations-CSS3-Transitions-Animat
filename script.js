// Part 2: Functions (scope, parameters, return values)

// Global variable
let animationCount = 0;

// Function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Local vs Global scope demonstration
function increaseAnimationCount() {
  let localCount = 1; // local variable
  animationCount += localCount;
  console.log("Total animations triggered: " + animationCount);
}

// Function to toggle a CSS class (reusable)
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// DOM Elements
const animateBoxBtn = document.getElementById("animateBoxBtn");
const box = document.querySelector(".animated-box");

const toggleModalBtn = document.getElementById("toggleModalBtn");
const modal = document.getElementById("modal");

// Event Listeners

// Animate box on click
animateBoxBtn.addEventListener("click", () => {
  toggleClass(box, "pulseOnce");
  increaseAnimationCount();
});

// Toggle modal
toggleModalBtn.addEventListener("click", () => {
  toggleClass(modal, "show");
  increaseAnimationCount();
});

// Extra: Single-time animation class
// (CSS will be reused to pulse once)
const style = document.createElement("style");
style.innerHTML = `
  .pulseOnce {
    animation: pulse 0.7s ease;
  }
`;
document.head.appendChild(style);

// Testing functions in console
console.log("Area of 5x10 box:", calculateArea(5, 10));