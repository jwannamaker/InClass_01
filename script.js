// Select elements from the DOM
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

// Initialize the counter variable
let count = 0;

// Function to update the display
function updateDisplay() {
    countDisplay.textContent = count;
}

// Add event listeners to the buttons
increaseBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Initial display update
updateDisplay();
