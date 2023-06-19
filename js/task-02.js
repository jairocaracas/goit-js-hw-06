const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.getElementById("ingredients");

const title = document.createElement("h2");
title.innerHTML = "Ingredients";
ingredientsList.before(title);
console.log(title);

for (const ingredient of ingredients) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  ingredientsList.append(newIngredient);
  console.log(ingredient);
}
