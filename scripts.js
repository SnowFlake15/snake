let cube = document.getElementById("cube");
let lefttDistance = 0;
let topDistance = 0;

let appleLeftDistance;
let appleTopDistance;

let scoreP = document.getElementById("score");
let canvas = document.getElementById("canvas-items")
let apple = document.createElement("div");

let score = 0;
let moveDirections = {
  moveHorizontalRight: true,
  moveHorizontalLeft: false,
  moveVerticalBottom: false,
  moveVerticalTop: false,
};
function move() {
  console.log(topDistance)
  console.log(appleTopDistance)
  if (lefttDistance == appleLeftDistance && topDistance == appleTopDistance) {
    console.log('wohoo')
    score += 1;
    scoreP.innerText = score;
    canvas.removeChild(apple)
    displayApple()
  }
  if (moveDirections.moveHorizontalRight == true) {
    if (lefttDistance != 270) {
      lefttDistance += 30;
      cube.style.left = `${lefttDistance}px`;
    } else {
    }
  } else if (moveDirections.moveHorizontalLeft == true) {
    if (lefttDistance != 0) {
      lefttDistance -= 30;
      cube.style.left = `${lefttDistance}px`;
    } else {
    }
  } else if (moveDirections.moveVerticalBottom == true) {
    if (topDistance != 270) {
      topDistance += 30;
      cube.style.top = `${topDistance}px`;
    } else {
    }
  } else if (moveDirections.moveVerticalTop == true) {
    if (topDistance != 0) {
      topDistance -= 30;
      cube.style.top = `${topDistance}px`;
    } else {
    }
  }
  
}

function changeDirection() {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      moveDirections.moveHorizontalLeft = true;
      moveDirections.moveHorizontalRight = false;
      moveDirections.moveVerticalBottom = false;
      moveDirections.moveVerticalTop = false;
      if (lefttDistance != 0) {
        move();
      } else {
      }
    }

    if (e.keyCode === 38) {
      moveDirections.moveHorizontalLeft = false;
      moveDirections.moveHorizontalRight = false;
      moveDirections.moveVerticalBottom = false;
      moveDirections.moveVerticalTop = true;
      if (topDistance != 0) {
        move();
      } else {
      }
    }

    if (e.keyCode === 39) {
      moveDirections.moveHorizontalLeft = false;
      moveDirections.moveHorizontalRight = true;
      moveDirections.moveVerticalBottom = false;
      moveDirections.moveVerticalTop = false;
      if (lefttDistance != 270) {
        move();
      } else {
      }
    }

    if (e.keyCode === 40) {
      moveDirections.moveHorizontalLeft = false;
      moveDirections.moveHorizontalRight = false;
      moveDirections.moveVerticalBottom = true;
      moveDirections.moveVerticalTop = false;
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

  apple.classList.add("apple");
  apple.style.left = `${appleLeftDistance}px`;
  apple.style.top = `${appleLeftDistance}px`;
  console.log(apple);

  canvas.appendChild(apple);
}

displayApple();
console.log(appleLeftDistance)
console.log(appleTopDistance)
function game() {
  scoreP.innerText = score;
  move();
}

setInterval(game, 500);