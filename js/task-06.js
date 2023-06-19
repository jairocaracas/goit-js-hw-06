const input = document.getElementById("validation-input");
const length = document
  .getElementById("validation-input")
  .getAttribute("data-length");

input.addEventListener("blur", validation);

function validation() {
  input.classList.remove("valid", "invalid");
  if (input.value.length == length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
