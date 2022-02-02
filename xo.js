let container = document.querySelector('.container');
createGrid();

let boxes = document.querySelectorAll('.box');
let symbol = "O";
// let counter = 0;  use for module operator

for (let i = 0; i < 9; i++) {
  const box = boxes[i];
  box.addEventListener('click', insertSymbol);
}

function insertSymbol(e) {
  console.log(e);
  //  counter++; 
  // if(counter % 2 == 1){
  //   symbol = "X";
  // }
  // else {
  //   symbol = "O";
  // };

  this.innerHTML = symbol;
  (symbol == "X") ? symbol = "O" : symbol = "X";
  this.removeEventListener('click', insertSymbol);
  checkLines();
}

function checkLines() {
  lines.forEach(function (line) {
    let box1 = boxes[line[0]];
    let box2 = boxes[line[1]];
    let box3 = boxes[line[2]];

    if (box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML && box1.innerHTML != "") {
      box1.style.background = "gold";
      box2.style.background = "gold";
      box3.style.background = "gold";
      stopGame();

    }
  });
}

function stopGame() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener('click', insertSymbol);
  }
}
function createGrid() {
  let text = "";
  for (let i = 0; i < 9; i++) {
    text += '<div class="box"></div>';
  }
  container.innerHTML = text;
}