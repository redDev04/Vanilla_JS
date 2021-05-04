

const result = document.querySelector("h1")
const Btn = document.querySelector("button");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getRandomNum() {
    return Math.floor(Math.random() * hex.length);
}

Btn.addEventListener("click", () => {
    let hexClr = "#";

    for (let i = 0; i < 6; i++) {
        hexClr += hex[getRandomNum()]
    } 
    console.log(hexClr)
    document.body.style.backgroundColor = hexClr;
    result.innerHTML = hexClr;
})






