const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const createElement = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");
  return itemEl;
});
listEl.append(...createElement);

// -------------------------------------------------------------------------
