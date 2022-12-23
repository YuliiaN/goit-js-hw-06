let counterValue = 0;
const valueRef = document.getElementById("value");
const buttonsRef = document.querySelectorAll("button");

const onButtonDecr = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const onButtonInc = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

buttonsRef[0].addEventListener("click", onButtonDecr);
buttonsRef[1].addEventListener("click", onButtonInc);
