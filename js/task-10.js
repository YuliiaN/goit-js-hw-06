function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divControlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const divBoxesRef = document.querySelector("#boxes");

let count = 0;
let width = 30;
let height = 30;
const amountOfDiv = [];

function createBoxes(amount) {
  amount = inputRef.value;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    const getColor = getRandomHexColor();

    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = `${getColor}`;

    amountOfDiv.push(div);

    count += 1;
    width += 10;
    height += 10;
  }
  divBoxesRef.append(...amountOfDiv);
}

function destroyBoxes() {
  divBoxesRef.innerHTML = "";
}

btnCreateRef.addEventListener("click", createBoxes);
btnDestroyRef.addEventListener("click", destroyBoxes);
