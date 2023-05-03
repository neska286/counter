//decleare varables
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
let displayCounter = document.getElementById("count");

let count = 0;

decrease.addEventListener("click", (eo) => {
  decreaseNumber();
});

increase.addEventListener("click", (eo) => {
  increaseNumber();
});

reset.addEventListener("click", (eo) => {
  resetNumber();
});

//functions
function increaseNumber() {
  count += 1;
  displayCounter.innerHTML = count;
  displayCounter.style.color = "green";
}

function decreaseNumber() {
  count -= 1;
  displayCounter.innerHTML = count;
  displayCounter.style.color = "red";
}

function resetNumber() {
  count = 0;
  displayCounter.innerHTML = count;
  displayCounter.style.color = "black";
}
