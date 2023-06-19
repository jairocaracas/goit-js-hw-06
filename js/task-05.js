const input = document.getElementById("name-input");
const newName = document.getElementById("name-output");
const initialState = "Anonymous";

input.addEventListener("input", editedText);

function editedText(e) {
  newName.textContent = e.target.value === "" ? initialState : e.target.value;
  console.log(newName);
}
