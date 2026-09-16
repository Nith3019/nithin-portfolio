// Welcome message in the browser console
console.log("Welcome to Nithin's Portfolio 🚀");

// Add a small interaction to all buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked:", button.textContent.trim());
    });
});