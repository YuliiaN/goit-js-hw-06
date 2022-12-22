const submitBtn = document.querySelector("button");
const inputsRefs = document.querySelectorAll("input");
const formRef = document.querySelector(".login-form");

// проверка на заполненность инпутов

function isInputsEmpty(event) {
  inputsRefs.forEach((input) => {
    if (!input.value) {
      alert(`Поле ${input.name} має бути заповненим!`);
    }
    formRef.addEventListener("submit", getAllValues);
  });
}

// сборка значений инпутов в объект

function getAllValues(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const dataObj = {
    email: email.value,
    password: password.value,
  };

  console.log(dataObj);

  event.currentTarget.reset();
}

submitBtn.addEventListener("click", isInputsEmpty);
