const counter = document.querySelector("#counter");
const counterValue = document.querySelector("#value");

let value = 0;

const increment = () => {
  value += 1;
  counterValue.textContent = value;
};

const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};

counter.addEventListener("click", (event) => {
  if (event.target.dataset.action === "increment") {
    increment();
  } else if (event.target.dataset.action === "decrement") {
    decrement();
  }
});
