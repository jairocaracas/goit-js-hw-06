const color = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", newColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function newColor() {
  const tempColor = getRandomHexColor();
  color.textContent = tempColor;
  document.body.style.backgroundColor = tempColor;
  console.log(bgColor);
}
