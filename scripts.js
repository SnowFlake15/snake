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

let snakeBody = [[0, 0]];
let direction = "right";
let apple = document.createElement("div");
let canvasId = document.getElementById("canvas-items");
let snakeBlock = new snakeSection();
let snakeCubes = document.getElementsByClassName("cube");
snakeBlock.id = canvasId;
// let appleBlock = new appleSection();
// appleBlock.id = canvasId;
const config = {
  speed: 500,
};

function move() {
  if (
    appleLeftDistance ===snakeLeft &&
    appleTopDistance === snakeTop
  ) {
    eatApple();
  }
  for (let i in snakeBody) {
    // console.log(snakeCubes[i])
    if (direction === "right") {
      if (snakeLeft < 270) {
        snakeLeft+=30;
        head.style.left=`${snakeLeft}px`
      }else{
      }
    } else if (direction === "left") {
      if (snakeLeft > 0) {
        snakeLeft-=30;
        head.style.left=`${snakeLeft}px`
      }
    } else if (direction === "top") {
      if (snakeTop> 0) {
        snakeTop-=30;
        head.style.top=`${snakeTop}px`
      }else{
      }
    } else if (direction === "bottom") {
      if (snakeTop < 270) {
        snakeTop+=30;
        head.style.top=`${snakeTop}px`
      }
    }
  }
  // console.log("=====");
}
function gameOver(){
  alert('game over')
  startGame()
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
  snakeBlock.snakeList = snakeBody;
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

  let left;
  let top;
  cubeSegment.classList.add("cube");
  cubeSegment.classList.add("canvas-item");
  canvasId.appendChild(cubeSegment);
  // snakeBody.unshift([left, top]);
  cubes.unshift(cubeSegment)
  // console.log(cubes)
  renderCubes()
}


function renderCubes(){
  // console.log(cubes)

  for(let i = 0; i < cubes.length - 1; i++){
    // console.log(cubes[i])
    // console.log( cubes[i].style.top,cubes[i+1].style.top)
    cubes[i].style.top=cubes[i+1].style.top
    cubes[i].style.left=cubes[i+1].style.left
    // console.log(cubes[i+1])
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








































// import { snakeSection } from "./snake/snakeSection.js";
// import { appleSection } from "./apple/appleSection.js";
// let score = 0;

// let cubes = []

// let scoreP = document.getElementById("score");
// let leftDistance = 0;
// let topDistance = 0;
// let appleLeftDistance;
// let appleTopDistance;
// let snakeBody = [[0, 0]];
// let direction = "right";
// let newDirection;
// let apple = document.createElement("div");
// let canvasId = document.getElementById("canvas-items");
// let snakeBlock = new snakeSection();
// let snakeCubes = document.getElementsByClassName("cube");
// snakeBlock.id = canvasId;
// // let appleBlock = new appleSection();
// // appleBlock.id = canvasId;
// const config = {
//   speed: 500,
// };

// function move() {
//   if (
//     appleLeftDistance === snakeBody[0][0] &&
//     appleTopDistance === snakeBody[0][1]
//   ) {
//     eatApple();
//   }
//   // eatApple();
//   // console.log(snakeBody,snakeCubes)
//   for (let i in snakeBody) {
//     // console.log(snakeCubes[i])
//     if (direction === "right") {
//       if (snakeBody[0][0] < 270) {
//         snakeBody[i][0] += 30;
//         // console.log(snakeBody[i][0],'+',(i*1+1)*30,'=',snakeBody[i][0]+(i*1+1)*30)

//         snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
//         snakeCubes[i].style.top = `${snakeBody[i][1]}px`;

//       }else{
//         // gameOver()
//       }
//     } else if (direction === "left") {
//       if (snakeBody[0][0] > 0) {
//         snakeBody[i][0] -= 30;
//         snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
//         snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
//       }
//     } else if (direction === "top") {
//       if (i==0&&snakeBody[0][1] > 0) {
//         snakeBody[i][1] -= 30;
//         snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
//         snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
//       }else{
//         snakeCubes[i].style.top = `${snakeBody[i-1][1]}px`;
//         console.log(snakeCubes)
//         snakeCubes[i].style.left = `${snakeBody[i-1][0]}px`;
//       }
//     } else if (direction === "bottom") {
//       if (snakeBody[0][1] < 270) {
//         snakeBody[i][1] += 30;
//         snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
//         snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
//       }
//     }
//   }
//   // console.log("=====");
// }
// function gameOver(){
//   alert('game over')
//   startGame()
// }

// function changeDirection() {
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 37) {
//       direction = "left";
//     }

//     if (e.keyCode === 38) {
//       direction = "top";
//     }

//     if (e.keyCode === 39) {
//       direction = "right";
//     }

//     if (e.keyCode === 40) {
//       direction = "bottom";
//     }
//   });
// }
// function createSnake() {
//   snakeBlock.snakeList = snakeBody;
//   snakeBlock.render();
// }
// function createApple() {
//   appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   apple.style.left = `${appleLeftDistance}px`;
//   apple.style.top = `${appleTopDistance}px`;
//   apple.classList.add("apple");
//   apple.setAttribute("id", "apple");
//   canvasId.appendChild(apple);
// }
// function updateScore() {
//   scoreP.innerHTML = score;
// }
// function eatApple() {
//   // console.log(appleLeftDistance,snakeBody[0][0])
//   // if(appleLeftDistance===snakeBody[0][0]&&appleTopDistance===snakeBody[0][1]){
//   score += 1;
//   updateScore();
//   // console.log(canvasId.children)
//   canvasId.removeChild(apple);
//   createApple();
//   addNewSegment();
//   // }
// }

// function addNewSegment() {
//   let cubeSegment = document.createElement("div");

//   let left;
//   let top;
//   if (direction === "right") {
    
//     left = snakeBody[snakeBody.length - 1][0] - 30;
//     top = snakeBody[snakeBody.length - 1][1];
//     // console.log(snakeBody[snakeBody.length - 1][1]);
//     console.log(left,top)
//     cubeSegment.style.left = left;
//   cubeSegment.style.top = top;
//   } else if (direction === "left") {
//     left = snakeBody[snakeBody.length - 1][0] + 30;
//     top = snakeBody[snakeBody.length - 1][1];
//   } else if (direction === "top") {
//     left = snakeBody[snakeBody.length - 1][0];
//     top = snakeBody[snakeBody.length - 1][1] - 30;
//   } else if (direction === "bottom") {
//     left = snakeBody[snakeBody.length - 1][0];
//     top = snakeBody[snakeBody.length - 1][1] + 30;
//   }


//   // cubeSegment.style.left = left;
//   // cubeSegment.style.top = top;
//   cubeSegment.classList.add("cube");
//   canvasId.appendChild(cubeSegment);
//   snakeBody.unshift([left, top]);
//   cubes.unshift(cubeSegment)
//   console.log(cubes)
//   // snakeBody.push([snakeBody[snakeBody.length-1][0],snakeBody[snakeBody.length-1][1]])
//   // cubeSegment.style
//   // console.log(snakeBody[snakeBody.length-1][0]-30)
// }
// function renderCubes(){

//   for(let i = 0; i < cubes.length - 1; i++){
//     // console.log( cubes[i].style.top,cubes[i+1].style.top)
//     // cubes[i].style.top=cubes[i+1].style.top
//     // cubes[i].style.left=cubes[i+1].style.left
//   }
// }
// function startGame() {
//   createSnake();
//   createApple();
//   changeDirection();
//   // setInterval(move, config.speed);
//   setInterval(() => {
//     renderCubes();
//     move();
//   }, config.speed);
//   updateScore();
// }

// // let canvasId = document.getElementById("canvas-items");
// // let snakeBlock = new snakeSection();
// // snakeBlock.id = canvasId;
// // snakeBlock.snakeList = snakeBody;
// // snakeBlock.render();

// // setInterval(startGame, config.speed);

// startGame();
