const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");
spanRef.style.fontSize = inputRef.value + "px"; // добавила отдельно, потому что без него шрифт в стартовой точке отображается неверно. по-другому не знаю как исправить

const changeFontSize = (event) => {
  spanRef.style.fontSize = event.currentTarget.value + "px";
};

inputRef.addEventListener("input", changeFontSize);
