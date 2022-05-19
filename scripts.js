
let lefttDistance =0;
let topDistance =0;

let appleLeftDistance =0;
let appleTopDistance =0;
let snakeBody = [[0,0]]
import {snakeSection} from "./snake/snakeSection.js"
let snakeBlock = new snakeSection();
let canvasId = document.getElementById("canvas-items")
snakeBlock.id=canvasId
snakeBlock.snakeList = snakeBody
snakeBlock.render()
let cubeBody = document.getElementsByClassName("cube");
console.log(cubeBody)
cubeBody[0].setAttribute("id", "cube")
let cubeHead = document.getElementById("cube")

let scoreP = document.getElementById("score");
let canvas = document.getElementById("canvas-items")
let apple = document.createElement("div");

let paused = false
let score = 0;
let moveDirections = {
  right: true,
  left: false,
  bottom: false,
  top: false,
};

function pauseGame(){
  document.addEventListener("keydown", (e) => {
    if(e.keyCode===32){
      if(paused===false){

      }
      console.log('game paused')
    }
  })
}
pauseGame()

function move() {
  if (lefttDistance == appleLeftDistance && topDistance == appleTopDistance) {
    score += 1;
    scoreP.innerText = score;
    canvas.removeChild(apple);
    eatApple()
    displayApple();
  }
  if (moveDirections.right == true) {
    if (snakeBody[0][0] < 270) {
      lefttDistance += 30;
      for (var i = 0; i < cubeBody.length; i++) {
        snakeBody[i][0]=snakeBody[i][0]+30
        console.log(snakeBody[i])
        cubeBody[i].style.left = `${snakeBody[i][0]}px`

      }
      console.log(snakeBody,cubeBody)
      console.log('------')
    } else {
    }
  } else if (moveDirections.left == true) {
    if (snakeBody[0][0] > 0) {
      lefttDistance -= 30;
      // cubeHead.style.left=`${lefttDistance}px`
      for (var i = 0; i < cubeBody.length; i++) {
        // lefttDistance=lefttDistance-i*30
        snakeBody[i][0]=snakeBody[i][0]-30
        console.log(snakeBody[i])
        cubeBody[i].style.left = `${snakeBody[i][0]}px`
        // cubeBody[i].style.left = `${lefttDistance-i*30}px`;
      }
      console.log(snakeBody,cubeBody)
      console.log('------')
    } else {
    }
  } else if (moveDirections.bottom == true) {
    if (snakeBody[0][1] < 270) {
      topDistance += 30;
      for (var i = 0; i < cubeBody.length; i++) {
        snakeBody[i][1]=snakeBody[i][1]+30
        console.log(snakeBody[i])
        cubeBody[i].style.top = `${snakeBody[i][1]}px`
      }
      console.log(snakeBody,cubeBody)
      console.log('------')
    } else {
    }
  } else if (moveDirections.top == true) {
    if (snakeBody[0][1] > 0) {
      topDistance -= 30;
      for (var i = 0; i < cubeBody.length; i++) {
        snakeBody[i][1]=snakeBody[i][1]-30
        console.log(snakeBody[i])
        cubeBody[i].style.top = `${snakeBody[i][1]}px`
      }
      console.log(snakeBody,cubeBody)
      console.log('------')
    } else {
    }
  }
  
}

function eatApple(){
  let body = snakeBody.length
  console.log(snakeBody)

  snakeBody.push([0,0])
  console.log(snakeBody)
  snakeBlock.snakeList = snakeBody
  snakeBlock.render()
}

function changeDirection() {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      moveDirections.left = true;
      moveDirections.right = false;
      moveDirections.bottom = false;
      moveDirections.top = false;
      if (lefttDistance != 0) {
        move();
      } else {
      }
    }

    if (e.keyCode === 38) {
      moveDirections.left = false;
      moveDirections.right = false;
      moveDirections.bottom = false;
      moveDirections.top = true;
      if (topDistance != 0) {
        move();
      } else {
      }
    }

    if (e.keyCode === 39) {
      moveDirections.left = false;
      moveDirections.right = true;
      moveDirections.bottom = false;
      moveDirections.top = false;
      if (lefttDistance != 270) {
        move();
      } else {
      }
    }

    if (e.keyCode === 40) {
      moveDirections.left = false;
      moveDirections.right = false;
      moveDirections.bottom = true;
      moveDirections.top = false;
      if (topDistance != 270) {
        move();
      } else {
      }
    }
  });
}
changeDirection();

function displayApple() {
  appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
  appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
  // console.log('new apple:',appleTopDistance,appleLeftDistance)
  
  apple.style.left = `${appleLeftDistance}px`;
  apple.style.top = `${appleTopDistance}px`;
  // console.log(apple);
  apple.classList.add("apple");
  canvas.appendChild(apple);
}

displayApple();
// console.log(appleLeftDistance)
// console.log(appleTopDistance)
function game() {
  scoreP.innerText = score;
 
  move();
}

setInterval(game, 500);
