const inputRef = document.querySelector("#validation-input");
const validValue = inputRef.getAttribute("data-length");

const checkValueLength = (event) => {
  if (event.currentTarget.value.length > validValue) {
    event.currentTarget.classList.add("invalid");
  }
  event.currentTarget.classList.add("valid");
};

inputRef.addEventListener("blur", checkValueLength);
