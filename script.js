let colors = randomColors(6);
let squares = document.querySelectorAll(".square")
let pickedColor = pickColor();
let p = document.querySelector("p")
p.textContent = "Guess which color " + pickedColor + " is!";
let feedback = document.querySelector("#feedback")


for (let i = 0; i <= squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener("click", function () {
        if (this.style.backgroundColor == pickedColor) {
            feedback.textContent = "Correct!"
            feedback.style.color = "rgb(182, 255, 37)"
            win()
        } else {
            feedback.textContent = "Try Again!"
            feedback.style.color = "rgb(252, 88, 132)"
            this.style.backgroundColor = "#232323"

        }
    })
}
function win() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColor

    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function randomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(makeColors())
    }

    return arr;
}

function makeColors() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
