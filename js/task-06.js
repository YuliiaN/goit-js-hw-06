const inputRef = document.querySelector("#validation-input");
const validValue = inputRef.getAttribute("data-length");

const checkValueLength = (event) => {
  if (event.currentTarget.value.length < validValue) {
    event.currentTarget.classList.add("invalid");
  } else {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  }
};

inputRef.addEventListener("blur", checkValueLength);
