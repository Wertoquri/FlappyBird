let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")

canvas.width = 500;
canvas.height = 500;

function triangle(x, y){
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y - 100);
    ctx.lineTo(x + 200, y);
    ctx.fill();
    ctx.closePath();
}

function circle(x, y) {
    ctx.fillStyle = "yellow"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function circle1(x, y) {
    ctx.fillStyle = "purple"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function circle2(x, y) {
    ctx.fillStyle = "white"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

triangle(30, 120);
triangle(30, 190);
triangle(30, 260);

circle(92, 90);
circle1(159, 160);
circle2(120, 230);


ctx.beginPath();
ctx.fillStyle = "brown";
ctx.fillRect(110, 260, 40, 100);
ctx.closePath();