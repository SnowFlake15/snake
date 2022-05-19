import { snakeSection } from "./snake/snakeSection.js";
import { appleSection } from "./apple/appleSection.js";
let score = 0;
let scoreP = document.getElementById("score");
let leftDistance = 0;
let topDistance = 0;
let appleLeftDistance;
let appleTopDistance;
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
    appleLeftDistance === snakeBody[0][0] &&
    appleTopDistance === snakeBody[0][1]
  ) {
    eatApple();
  }
  // eatApple();
  // console.log(snakeBody,snakeCubes)
  for (let i in snakeBody) {
    console.log(snakeCubes[i])
    if (direction === "right") {
      if (snakeBody[i][0] < 270) {
        snakeBody[i][0] += 30;
        // console.log(snakeBody[i][0],'+',(i*1+1)*30,'=',snakeBody[i][0]+(i*1+1)*30)

        snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
        snakeCubes[i].style.top = `${snakeBody[i][1]}px`;

      }else{
        gameOver()
      }
    } else if (direction === "left") {
      if (snakeBody[i][0] > 0) {
        snakeBody[i][0] -= 30;
        snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
        snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
      }
    } else if (direction === "top") {
      if (snakeBody[i][1] > 0) {
        snakeBody[i][1] -= 30;
        snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
        snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
      }
    } else if (direction === "bottom") {
      if (snakeBody[i][1] < 270) {
        snakeBody[i][1] += 30;
        snakeCubes[i].style.top = `${snakeBody[i][1]}px`;
        snakeCubes[i].style.left = `${snakeBody[i][0]}px`;
      }
    }
  }
  console.log("=====");
}
function gameOver(){
  direction = "none"
  clearInterval(move)
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
  // console.log(appleLeftDistance,snakeBody[0][0])
  // if(appleLeftDistance===snakeBody[0][0]&&appleTopDistance===snakeBody[0][1]){
  score += 1;
  updateScore();
  // console.log(canvasId.children)
  canvasId.removeChild(apple);
  createApple();
  addNewSegment();
  // }
}

function addNewSegment() {
  let left;
  let top;
  if (direction === "right") {
    left = snakeBody[snakeBody.length - 1][0] - 30;
    top = snakeBody[snakeBody.length - 1][1];
    // console.log(snakeBody[snakeBody.length - 1][1]);
  } else if (direction === "left") {
    left = snakeBody[snakeBody.length - 1][0] + 30;
    top = snakeBody[snakeBody.length - 1][1];
  } else if (direction === "top") {
    left = snakeBody[snakeBody.length - 1][0];
    top = snakeBody[snakeBody.length - 1][1] - 30;
  } else if (direction === "bottom") {
    left = snakeBody[snakeBody.length - 1][0];
    top = snakeBody[snakeBody.length - 1][1] + 30;
  }

  let cubeSegment = document.createElement("div");

  cubeSegment.style.left = left;
  cubeSegment.style.top = top;
  cubeSegment.classList.add("cube");
  canvasId.appendChild(cubeSegment);
  snakeBody.push([left, top]);
  // snakeBody.push([snakeBody[snakeBody.length-1][0],snakeBody[snakeBody.length-1][1]])
  // cubeSegment.style
  // console.log(snakeBody[snakeBody.length-1][0]-30)
}

function startGame() {
  createSnake();
  createApple();
  changeDirection();
  setInterval(move, config.speed);
  updateScore();
}

// let canvasId = document.getElementById("canvas-items");
// let snakeBlock = new snakeSection();
// snakeBlock.id = canvasId;
// snakeBlock.snakeList = snakeBody;
// snakeBlock.render();

// setInterval(startGame, config.speed);

startGame();

// let lefttDistance =0;
// let topDistance =0;

// let appleLeftDistance =0;
// let appleTopDistance =0;
// let snakeBody = [[0,0]]
// import {snakeSection} from "./snake/snakeSection.js"
// let snakeBlock = new snakeSection();
// let canvasId = document.getElementById("canvas-items")
// snakeBlock.id=canvasId
// snakeBlock.snakeList = snakeBody
// snakeBlock.render()
// let cubeBody = document.getElementsByClassName("cube");
// console.log(cubeBody)
// cubeBody[0].setAttribute("id", "cube")
// let cubeHead = document.getElementById("cube")

// let scoreP = document.getElementById("score");
// let canvas = document.getElementById("canvas-items")
// let apple = document.createElement("div");

// let paused = false
// let score = 0;
// let moveDirections = {
//   right: true,
//   left: false,
//   bottom: false,
//   top: false,
// };

// function pauseGame(){
//   document.addEventListener("keydown", (e) => {
//     if(e.keyCode===32){
//       if(paused===false){

//       }
//       console.log('game paused')
//     }
//   })
// }
// pauseGame()

// function move() {
//   if (lefttDistance == appleLeftDistance && topDistance == appleTopDistance) {
//     score += 1;
//     scoreP.innerText = score;
//     canvas.removeChild(apple);
//     eatApple()
//     displayApple();
//   }
//   if (moveDirections.right == true) {
//     if (snakeBody[0][0] < 270) {
//       lefttDistance += 30;
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][0]=snakeBody[i][0]+30
//         console.log(snakeBody[i])
//         cubeBody[i].style.left = `${snakeBody[i][0]}px`

//       }
//       console.log(snakeBody,cubeBody)
//       console.log('------')
//     } else {
//     }
//   } else if (moveDirections.left == true) {
//     if (snakeBody[0][0] > 0) {
//       lefttDistance -= 30;
//       // cubeHead.style.left=`${lefttDistance}px`
//       for (var i = 0; i < cubeBody.length; i++) {
//         // lefttDistance=lefttDistance-i*30
//         snakeBody[i][0]=snakeBody[i][0]-30
//         console.log(snakeBody[i])
//         cubeBody[i].style.left = `${snakeBody[i][0]}px`
//         // cubeBody[i].style.left = `${lefttDistance-i*30}px`;
//       }
//       console.log(snakeBody,cubeBody)
//       console.log('------')
//     } else {
//     }
//   } else if (moveDirections.bottom == true) {
//     if (snakeBody[0][1] < 270) {
//       topDistance += 30;
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][1]=snakeBody[i][1]+30
//         console.log(snakeBody[i])
//         cubeBody[i].style.top = `${snakeBody[i][1]}px`
//       }
//       console.log(snakeBody,cubeBody)
//       console.log('------')
//     } else {
//     }
//   } else if (moveDirections.top == true) {
//     if (snakeBody[0][1] > 0) {
//       topDistance -= 30;
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][1]=snakeBody[i][1]-30
//         console.log(snakeBody[i])
//         cubeBody[i].style.top = `${snakeBody[i][1]}px`
//       }
//       console.log(snakeBody,cubeBody)
//       console.log('------')
//     } else {
//     }
//   }

// }

// function eatApple(){
//   let body = snakeBody.length
//   console.log(snakeBody)

//   snakeBody.push([0,0])
//   console.log(snakeBody)
//   snakeBlock.snakeList = snakeBody
//   snakeBlock.render()
// }

// function changeDirection() {
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 37) {
//       moveDirections.left = true;
//       moveDirections.right = false;
//       moveDirections.bottom = false;
//       moveDirections.top = false;
//       if (lefttDistance != 0) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 38) {
//       moveDirections.left = false;
//       moveDirections.right = false;
//       moveDirections.bottom = false;
//       moveDirections.top = true;
//       if (topDistance != 0) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 39) {
//       moveDirections.left = false;
//       moveDirections.right = true;
//       moveDirections.bottom = false;
//       moveDirections.top = false;
//       if (lefttDistance != 270) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 40) {
//       moveDirections.left = false;
//       moveDirections.right = false;
//       moveDirections.bottom = true;
//       moveDirections.top = false;
//       if (topDistance != 270) {
//         move();
//       } else {
//       }
//     }
//   });
// }
// changeDirection();

// function displayApple() {
//   appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   // console.log('new apple:',appleTopDistance,appleLeftDistance)

//   apple.style.left = `${appleLeftDistance}px`;
//   apple.style.top = `${appleTopDistance}px`;
//   // console.log(apple);
//   apple.classList.add("apple");
//   canvas.appendChild(apple);
// }

// displayApple();
// // console.log(appleLeftDistance)
// // console.log(appleTopDistance)
// function game() {
//   scoreP.innerText = score;

//   move();
// }

// setInterval(game, 500);

// -----------------------------------------------

// let lefttDistance =0;
// let topDistance =0;

// let appleLeftDistance =0;
// let appleTopDistance =0;
// let snakeBody = [[0,0]]
// import {snakeSection} from "./snake/snakeSection.js"
// let snakeBlock = new snakeSection();
// let canvasId = document.getElementById("canvas-items")
// snakeBlock.id=canvasId
// snakeBlock.snakeList = snakeBody
// snakeBlock.render()
// let cubeBody = document.getElementsByClassName("cube");
// // console.log(cubeBody)
// cubeBody[0].setAttribute("id", "cube")
// let snakeHead = document.getElementById("cube")

// let scoreP = document.getElementById("score");
// let canvas = document.getElementById("canvas-items")
// let apple = document.createElement("div");

// let paused = false
// let score = 0;
// let moveDirections = {
//   right: true,
//   left: false,
//   bottom: false,
//   top: false,
// };

// function pauseGame(){
//   document.addEventListener("keydown", (e) => {
//     if(e.keyCode===32){
//       if(paused===false){

//       }
//       console.log('game paused')
//     }
//   })
// }
// pauseGame()

// function move() {
//   if (snakeBody[0][0] == appleLeftDistance && snakeBody[0][1] == appleTopDistance) {
//     score += 1;
//     scoreP.innerText = score;
//     canvas.removeChild(apple);
//     eatApple()
//     displayApple();
//   }
//   if (moveDirections.right == true) {
//     if (snakeBody[0][0] < 270) {
//       // lefttDistance += 30;
//       // snakeBody[0][0]+=30;
//       // snakeHead.style.left=`${snakeBody[0][0]}px`
//       // snakeBody[0][0]+=30;
//       // console.log(snakeBody)
//       // cubeBody[0].style.left = `${snakeBody[i][0]}px`
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][0]=snakeBody[i][0]+30
//         console.log(snakeBody)
//         cubeBody[i].style.left = `${snakeBody[i][0]}px`
//       }
//       // console.log(snakeBody,cubeBody)
//       // console.log('------')
//     } else {
//     }
//   } else if (moveDirections.left == true) {
//     if (snakeBody[0][0] > 0) {
//       // lefttDistance -= 30;
//       // snakeBody[0][0]-=30
//       // snakeHead.style.left=`${snakeBody[0][0]}px`
//       // cubeHead.style.left=`${lefttDistance}px`
//       for (var i = 0; i < cubeBody.length; i++) {
//         lefttDistance=lefttDistance-i*30
//         snakeBody[i][0]=snakeBody[i][0]-30
//         // console.log(snakeBody[i])
//         // cubeBody[i].style.left = `${snakeBody[i][0]}px`
//         cubeBody[i].style.left = `${lefttDistance-i*30}px`;
//       }
//       // console.log(snakeBody,cubeBody)
//       // console.log('------')
//     } else {
//     }
//   } else if (moveDirections.bottom == true) {
//     if (snakeBody[0][1] < 270) {
//       // topDistance += 30;
//       // snakeBody[0][1]+=30
//       // snakeHead.style.top=`${snakeBody[0][1]}px`
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][1]=snakeBody[i][1]+30
//         // console.log(snakeBody[i])
//         cubeBody[i].style.top = `${snakeBody[i][1]}px`
//       }
//       // console.log(snakeBody,cubeBody)
//       // console.log('------')
//     } else {
//     }
//   } else if (moveDirections.top == true) {
//     if (snakeBody[0][1] > 0) {
//       // topDistance -= 30;
//       // snakeBody[0][1]-=30
//       // snakeHead.style.top=`${snakeBody[0][1]}px`
//       for (var i = 0; i < cubeBody.length; i++) {
//         snakeBody[i][1]=snakeBody[i][1]-30
//         // console.log(snakeBody[i])
//         cubeBody[i].style.top = `${snakeBody[i][1]}px`
//       }
//       // console.log(snakeBody,cubeBody)
//       // console.log('------')
//     } else {
//     }
//   }
//   console.log(snakeBody)

// }

// function eatApple(){
//   let body = snakeBody.length
//   // console.log(snakeBody)
//   let leftDistance=snakeBody[snakeBody.length-1][0]
//   let topDistance=snakeBody[snakeBody.length-1][1]
//   snakeBody.push([leftDistance,topDistance])
//   // console.log(snakeBody)
//   snakeBlock.snakeList = snakeBody
//   snakeBlock.render()
// }

// function changeDirection() {
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 37) {
//       moveDirections.left = true;
//       moveDirections.right = false;
//       moveDirections.bottom = false;
//       moveDirections.top = false;
//       if (lefttDistance != 0) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 38) {
//       moveDirections.left = false;
//       moveDirections.right = false;
//       moveDirections.bottom = false;
//       moveDirections.top = true;
//       if (topDistance != 0) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 39) {
//       moveDirections.left = false;
//       moveDirections.right = true;
//       moveDirections.bottom = false;
//       moveDirections.top = false;
//       if (lefttDistance != 270) {
//         move();
//       } else {
//       }
//     }

//     if (e.keyCode === 40) {
//       moveDirections.left = false;
//       moveDirections.right = false;
//       moveDirections.bottom = true;
//       moveDirections.top = false;
//       if (topDistance != 270) {
//         move();
//       } else {
//       }
//     }
//   });
// }
// changeDirection();

// function displayApple() {
//   appleTopDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   appleLeftDistance = Math.round((Math.random() * (270 - 0) + 0) / 30) * 30;
//   // console.log('new apple:',appleTopDistance,appleLeftDistance)

//   apple.style.left = `${appleLeftDistance}px`;
//   apple.style.top = `${appleTopDistance}px`;
//   // console.log(apple);
//   apple.classList.add("apple");
//   canvas.appendChild(apple);
// }

// displayApple();
// // console.log(appleLeftDistance)
// // console.log(appleTopDistance)
// function game() {
//   scoreP.innerText = score;

//   move();
// }

// setInterval(game, 500);
