const elements = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${elements.length}`);

for (let element of elements) {
  const category = element.firstElementChild.innerText;
  const counter = element.lastElementChild.children.length;
  console.log(`Category: ${category} \n Elements: ${counter}`);
}
