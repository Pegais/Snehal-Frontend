var item = document.querySelectorAll(".item")
var item2 = document.querySelector("#one")
var clr = ["green", "blue", "red"]

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

reset();
//   console.log(clr[generateRandomInteger(0, 2)])
function reset() {
    for (let index = 0; index < item.length; index++) {
        item[index].style.display = "block";
        item[index].style.background = clr[generateRandomInteger(0, 2)];
    }
    console.log("reset hua")
}

function callBlue() {
    for (let index = 0; index < item.length; index++) {
        item[index].style.display = "block";
        if (item[index].style.background == "blue") {

        } else {
            item[index].style.display = "none";
        }
    }
}

function callGreen() {
    for (let index = 0; index < item.length; index++) {
        item[index].style.display = "block";
        if (item[index].style.background == "green") {

        } else {
            item[index].style.display = "none";

        }
    }
}

function callRed() {
    for (let index = 0; index < item.length; index++) {
        item[index].style.display = "block";
        if (item[index].style.background == "red") {

        } else {
            item[index].style.display = "none";
        }
    }
}