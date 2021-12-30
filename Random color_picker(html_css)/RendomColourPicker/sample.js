var arr = ["red", "green", "blue"]
var main = document.querySelector("main")

function generate() {
    for (var i = 0; i < 100; i++) {
        var idx = parseInt(0 + Math.random() * arr.length);
        var div = `<div style="background:${arr[idx]}"></div>`
        main.innerHTML += div;
    }
}

var blue = document.getElementById("blue"),
    green = document.getElementById("green"),
    reset = document.getElementById("reset"),
    red = document.getElementById("red");



// functions 
function filter(e) {

}

blue.addEventListener("click", filter)
red.addEventListener("click", filter)
green.addEventListener("click", filter)
reset.addEventListener("click", filter)

// arr = [1, 2, 3, 4]
// sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     // sum = arr[i];
// }




generate()



// -56.89

// floor    56

// ceil     57

// parseint 56