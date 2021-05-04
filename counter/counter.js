
const result = document.querySelector(".result")
const plus = document.querySelector(".plusBtn")
const minus = document.querySelector(".minusBtn")

let value = 0;

plus.addEventListener("click", () => {
    result.innerHTML = value++;
})

minus.addEventListener("click", () => {
    result.innerHTML = value--;
})

