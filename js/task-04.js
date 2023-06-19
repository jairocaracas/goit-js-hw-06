const countValue = document.querySelector("#value");
const buttons = document.querySelectorAll("button");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    let calculate = e.target.getAttribute("data-action");

    if (calculate === "increment") {
      countValue.textContent++;
    } else if (calculate === "decrement") {
      countValue.textContent--;
    }
  });
}
