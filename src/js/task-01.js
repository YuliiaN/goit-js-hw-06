// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const getNumOfCategories = () => {
  const listRef = document.getElementById("categories");
  return `Number of categories: ${listRef.children.length}`;
};

console.log(getNumOfCategories());

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const getSubCategories = () => {
  const listItemRef = document.querySelectorAll(".item");

  let resultStr = "";
  for (const child of listItemRef) {
    resultStr += `Category: ${
      child.querySelector("h2").textContent
    }\nElements: ${child.querySelector("ul").children.length}\n`;
  }

  return resultStr;
};

console.log(getSubCategories());
