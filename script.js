let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 256;
canvas.height = 512;

let score_text = document.getElementById("score");
let bestScore_text = document.getElementById("bestScore");
let score = 0;
let bestScore = 0;

let bird = new Image();
let back = new Image();
let road = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

let fly_audio = new Audio();
let score_audio = new Audio();

bird.src = "img/bird.png";
back.src = "img/back.png";
road.src = "img/road.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

fly_audio.src = "audio/fly_audio.mp3";
fly_audio.src = "audio/score.mp3";

let xPos = 10;
let yPos = 150;
let gravity = 0.45;
let velY = 0;

let gap = 100;

let pipe = [];

pipe[0] = {
  x: canvas.width,
  y: 0
}

function draw() {
  ctx.drawImage(back, 0, 0);
  ctx.drawImage(bird, xPos, yPos);
  if (yPos + bird.height >= canvas.height - road.height) {
    reload();
  }
  velY += gravity;
  yPos += velY;

  for (let i = 0; i < pipe.length; i++) {
    if (pipe[i].x < pipe.width) {
      pipe.shift()
    }
    else {


      ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
      ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
      pipe[i].x -= 2
      if (pipe[i].x == 100) {
        pipe.push({
          x: canvas.width,
          y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
        })
      }
    }
    if (xPos + bird.width >= pipe[i].x &&
      xPos <= pipe[i].x + pipeUp.width &&
      (yPos <= pipe[i].y + pipeUp.height ||
        yPos + bird.height >= pipe[i].y + pipeUp.height + gap)) {
      reload()
    }
    if (pipe[i].x == 0) {
      score_audio.play
      score++
    }

  }
  score_text.innerHTML = `score: ${score}`
  bestScore_text.innerHTML = `bestScore: ${bestScore}`
  ctx.drawImage(road, 0, canvas.height - road.height);
}

function reload() {
  if (score > bestScore) {
    bestScore = score
  }
  xPos = 10;
  yPos = 150;
  velY = 0;
  pipe = [];
  score = 0;
  pipe[0] = {
    x: canvas.width,
    y: 0
  }
}

canvas.addEventListener("mousedown", moveUp)

function moveUp() {
  if (yPos >= 0) {
    velY = -6;
    fly_audio.play()
  }
}








setInterval(draw, 20);
