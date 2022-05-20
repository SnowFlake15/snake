import { snakeSection } from "./snake/snakeSection.js";
import { appleSection } from "./apple/appleSection.js";
import { config } from "./config/config.js"

let cubes = []
let head;
let scoreP = document.getElementById("score");
let appleLeftDistance;
let appleTopDistance;
let start;
let snakeTop=0;
let snakeLeft=0;
let pause = document.getElementById("pause")
let paused = false
let apple = document.createElement("div");
let canvasId = document.getElementById("canvas-items");
let snakeBlock = new snakeSection();
snakeBlock.id = canvasId;

pause.onclick=function(){
  console.log(paused)
  if(paused===true){
    start = setInterval(() => {
      renderCubes();
      move();
    }, config.speed);
    // clearInterval(start)
    pause.textContent = "pause game"
    paused=false
  }else if(paused===false){
    clearInterval(start)
    pause.textContent = "resume game"
    paused=true
  }
  console.log(paused)
  console.log("===========")
  // clearInterval(renderCubes)
  
}
function move() {
  if (
    appleLeftDistance ===snakeLeft &&
    appleTopDistance === snakeTop
  ) {
    eatApple();
  }
  if(snakeTop){

  }
    if (config.direction === "right") {
      if (snakeLeft < 270) {
        snakeLeft+=30;
        head.style.left=`${snakeLeft}px`
      }else{
        gameOver()
      }
    } else if (config.direction === "left") {
      if (snakeLeft > 0) {
        snakeLeft-=30;
        head.style.left=`${snakeLeft}px`
      }else{
        gameOver()
      }
    } else if (config.direction === "top") {
      if (snakeTop> 0) {
        snakeTop-=30;
        head.style.top=`${snakeTop}px`
      }else{
        gameOver()
      }
    } else if (config.direction === "bottom") {
      if (snakeTop < 270) {
        snakeTop+=30;
        head.style.top=`${snakeTop}px`
      }else{
        gameOver()
      }
    }
}
function gameOver(){
  // canvasId.innerHTML=""
}

function changeDirection() {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      config.direction = "left";
    }

    if (e.keyCode === 38) {
      config.direction = "top";
    }

    if (e.keyCode === 39) {
      config.direction = "right";
    }

    if (e.keyCode === 40) {
      config.direction = "bottom";
    }
  });
}
function createSnake() {
  

  snakeBlock.render();
  head = document.getElementById("head")
  cubes.unshift(head)
  
}
function createApple() {
  appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
  appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
  apple.style.left = `${appleLeftDistance}px`;
  apple.style.top = `${appleTopDistance}px`;
  apple.classList.add("apple");
  apple.setAttribute("id", "apple");
  canvasId.appendChild(apple);
}
function updateScore() {
  scoreP.innerHTML = config.score;
}
function eatApple() {
  config.score += 1;
  updateScore();
  canvasId.removeChild(apple);
  createApple();
  addNewSegment();
}

function addNewSegment() {
  let cubeSegment = document.createElement("div");
  cubeSegment.classList.add("cube");
  cubeSegment.classList.add("canvas-item");
  canvasId.appendChild(cubeSegment);
  cubes.unshift(cubeSegment)
  renderCubes()
}


function renderCubes(){
  for(let i = 0; i < cubes.length - 1; i++){
    let top = cubes[i+1].style.top
    let left = cubes[i+1].style.left
    cubes[i].style.top=top
    cubes[i].style.left=left
  }
}
function startGame() {
  createSnake();
  createApple();
  changeDirection();
  start = setInterval(() => {
    renderCubes();
    move();
  }, config.speed);
  // setInterval(renderCubes,config.speed)
  // setInterval(move,config.speed)
  updateScore();
}


startGame();
























