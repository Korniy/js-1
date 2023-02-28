const decrementBtnEl = document.querySelector("[data-action=decrement]");
const incrementBtnEl = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

decrementBtnEl.addEventListener("click", onButtonDecrementClick);
incrementBtnEl.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
}

function onButtonIncrementClick() {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
}

// -------------------------------------------------------------------------
