let addToCart = document.getElementById("addToCart");
let inputField = document.getElementById("input-field");
let shoppingList = document.getElementById("shoppingList");

addToCart.addEventListener("click", function () {
  let inputValue = inputField.value;
  // clear the list items
  shoppingList.innerHTML += `<li>${inputValue}</li>`;
  clearInputField();
});

function clearInputField() {
  inputField.value = "";
}
