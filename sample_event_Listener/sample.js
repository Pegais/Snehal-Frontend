var paddle = document.querySelector(".paddle");
var ball = document.querySelector(".ball")
var container = document.querySelector(".main")

let container_bound = container.getBoundingClientRect()
console.log(container_bound)

let flag;

function movePaddle(change) {
    let paddle_bound = paddle.getBoundingClientRect(); // to get the bounding element of paddle;
    if (paddle_bound.left + change >= container_bound.left && paddle_bound.right + change <= container_bound.right) {
        let a = ((paddle_bound.left) + (change)) + "px";
        paddle.style.left = a;

    }
}

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft") {
        // console.log("a");
        movePaddle(-20)
    }
    if (e.key == "ArrowRight") {
        // console.log("b");
        movePaddle(20)
    }
})



var ball = document.querySelector(".ball")
let y;
let x;

function move() {
    let { left, right, top, bottom } = ball.getBoundingClientRect();

    // horizontal bound and vertical bound



    if (top <= container_bound.top || bottom >= container_bound.bottom - paddle.getBoundingClientRect().height) {

        y = !y;



    }
    if (left <= container_bound.left || right >= container_bound.right) {
        x = !x;
    }

    // for vertical bound.
    ball.style.left = x == true ? left + 1 + "px" : left - 1 + "px";
    ball.style.top = y == true ? top + 1 + "px" : top - 1 + "px";
    console.log(ball);
    requestAnimationFrame(move)
}
// requestAnimationFrame(move)