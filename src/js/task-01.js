// 1
const listEl = document.querySelector("#categories");

const numberOfCategories = listEl.children.length;
console.log("Number of categories:", numberOfCategories);

// 2
const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((element) => {
  const titleEl = element.querySelector("h2").innerHTML;
  console.log("Category:", titleEl);

  const itemsLength = element.querySelectorAll("li").length;
  console.log("Elements:", itemsLength);
});
1;

// -------------------------------------------------------------------------
