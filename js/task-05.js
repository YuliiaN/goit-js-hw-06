const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const changeInput = (event) => {
  spanRef.textContent = !event.currentTarget.value
    ? "Anonymous"
    : event.currentTarget.value;
};

inputRef.addEventListener("input", changeInput);
