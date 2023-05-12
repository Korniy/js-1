const inputEl = document.querySelector("#validation-input");
const lengthOfSymbols = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const length = event.currentTarget.value.length;

  if (length === lengthOfSymbols) {
    inputEl.classList.remove("invalid");
    return inputEl.classList.add("valid");
  }
  inputEl.classList.remove("valid");
  return inputEl.classList.add("invalid");
}
// -------------------------------------------------------------------------
