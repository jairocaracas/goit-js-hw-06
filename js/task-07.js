const text = document.getElementById("text");
const sizeInput = document.getElementById("font-size-control");

sizeInput.addEventListener("input", updateValue);

function updateValue(e) {
  text.style.fontSize = e.target.value + "px";
}
