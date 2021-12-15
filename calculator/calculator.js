// clear screen
function clearScreen() {
    document.querySelector("#result").value = ""

}

function displayValue(value) {
    document.querySelector("#result").value += value;

    console.log(value)

}

function calculate() {
    var fnum = document.querySelector("#result").value;
    var snum = eval(fnum);
    document.querySelector("#result").value = snum;
}