function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

function onChangeColor(event) {
  const getColor = getRandomHexColor();
  bodyRef.style.backgroundColor = `${getColor}`;
  spanRef.textContent = `${getColor}`;
}

buttonRef.addEventListener("click", onChangeColor);
