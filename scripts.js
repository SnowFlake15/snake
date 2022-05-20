import { snakeSection } from "./snake/snakeSection.js";
import { appleSection } from "./apple/appleSection.js";
let score = 0;

let cubes = []
let head;
let scoreP = document.getElementById("score");
let appleLeftDistance;
let appleTopDistance;

let snakeTop=0;
let snakeLeft=0;

let direction = "right";
let apple = document.createElement("div");
let canvasId = document.getElementById("canvas-items");
let snakeBlock = new snakeSection();
snakeBlock.id = canvasId;
const config = {
  speed: 500,
};

document.getElementById("pause").onclick=function(){
  clearInterval(move)
  clearInterval(renderCubes)
  
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
    if (direction === "right") {
      if (snakeLeft < 270) {
        snakeLeft+=30;
        head.style.left=`${snakeLeft}px`
      }else{
        gameOver()
      }
    } else if (direction === "left") {
      if (snakeLeft > 0) {
        snakeLeft-=30;
        head.style.left=`${snakeLeft}px`
      }else{
        gameOver()
      }
    } else if (direction === "top") {
      if (snakeTop> 0) {
        snakeTop-=30;
        head.style.top=`${snakeTop}px`
      }else{
        gameOver()
      }
    } else if (direction === "bottom") {
      if (snakeTop < 270) {
        snakeTop+=30;
        head.style.top=`${snakeTop}px`
      }else{
        gameOver()
      }
    }
}
function gameOver(){
  canvasId.innerHTML=""
}

function changeDirection() {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      direction = "left";
    }

    if (e.keyCode === 38) {
      direction = "top";
    }

    if (e.keyCode === 39) {
      direction = "right";
    }

    if (e.keyCode === 40) {
      direction = "bottom";
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
  scoreP.innerHTML = score;
}
function eatApple() {
  score += 1;
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
    cubes[i].style.top=cubes[i+1].style.top
    cubes[i].style.left=cubes[i+1].style.left
  }
}
function startGame() {
  createSnake();
  createApple();
  changeDirection();
  setInterval(() => {
    renderCubes();
    move();
  }, config.speed);
  updateScore();
}


startGame();
























