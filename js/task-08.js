const submitBtn = document.querySelector("button");
const inputsRefs = document.querySelectorAll("input");
const formRef = document.querySelector(".login-form");

function getAllValues(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    alert(`Всі поля мають бути заповнені!`);
    return;
  }

  const dataObj = {
    email: email.value,
    password: password.value,
  };

  console.log(dataObj);

  event.currentTarget.reset();
}

formRef.addEventListener("submit", getAllValues);

// submitBtn.addEventListener("click", isInputsEmpty);
