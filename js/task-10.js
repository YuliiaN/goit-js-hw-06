function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

let size = 30;
const amountOfDiv = [];

function createBoxes(amount) {
  amount = inputRef.value;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const getColor = getRandomHexColor();

    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = `${getColor}`;

    amountOfDiv.push(div);

    size += 10;
  }
  divBoxesRef.append(...amountOfDiv);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

btnCreateRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);
