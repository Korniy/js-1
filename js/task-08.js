const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailEl = event.currentTarget.elements.email.value;
  const passwordEl = event.currentTarget.elements.password.value;

  if (emailEl === "" || passwordEl === "") {
    alert("Всі поля повинні бути заповнені");
  }

  const newObject = { emailEl, passwordEl };
  console.log(newObject);

  formEl.reset();
}

// -------------------------------------------------------------------------
