const textAreaEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter");
const btnEl = document.getElementById("btn");
const remainCharEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", () => {
  // console.log(textAreaEl.value);  // test, debug
  // console.log("key is pressed");  // test, debug

  updateCounter();
});

updateCounter();

function updateCounter() {
    totalCharEl.innerText = textAreaEl.value.length;
    remainCharEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
}

btnEl.addEventListener("click", () => {
  textAreaEl.value = "";
  updateCounter();
});
