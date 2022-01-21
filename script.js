// Buttons
const btn_minus = document.querySelectorAll("div.counter-container button")[0];
const btn_plus = document.querySelectorAll("div.counter-container button")[1];
const btn_reset = document.querySelector("div.counter-reset button");

// Number value displayed
const counter_value = document.querySelector("div.counter-value h1");

// Counter with starting value
let counter = 0;
counter_value.textContent = localStorage.getItem("counter");

// Debugging
// btn_minus.onclick = () => alert("- clicked");
// btn_plus.onclick = () => alert("+ clicked");
// btn_reset.onclick = () => alert("reset clicked");

// Function to update counter whenever button +/-/reset is clicked
function update_counter() {
  localStorage.setItem("counter", counter);
  counter_value.textContent = Number(localStorage.getItem("counter"));
}

// Changing the counter value and updating number displayed
btn_minus.onclick = () => {
  if (Number(counter_value.textContent) > 0) {
    counter = Number(localStorage.getItem("counter") - 1);
    update_counter();
  } else if (Number(counter_value.textContent) < 0) {
    counter = 0;
    update_counter();
  }
};

btn_plus.onclick = () => {
  counter = Number(localStorage.getItem("counter")) + 1;
  update_counter();
};

btn_reset.onclick = () => {
  counter = 0;
  update_counter();
};
