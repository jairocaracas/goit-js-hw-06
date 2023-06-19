const number = document.querySelector("#controls > input[type=number]");
const boxReciever = document.querySelector("#boxes");
let boxSize = 30;

const buttonCreate = document.querySelector("button[data-create");
buttonCreate.addEventListener("click", createElements);
function createElements() {
  boxReciever.innerHTML = "";
  boxSize = 30;

  for (let i = 0; i < number.value; i++) {
    boxReciever.innerHTML += `<div
    style="width:${boxSize}px; 
  height:${boxSize}px; 
  background:${getRandomHexColor()};"
  ></div>`;

    boxSize += 10;
  }
}

const buttonDestroy = document.querySelector("button[data-destroy");
buttonDestroy.addEventListener("click", destroyElements);
function destroyElements() {
  boxReciever.innerHTML = "";
  boxSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
