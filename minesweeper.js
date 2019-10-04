document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
}

  // automatically generate the board
function makeCells () {

  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      board.cells.push({
        row: i, 
        col: j, 
        isMine: Boolean(Math.floor(Math.random() * 1.5)),
        isMarked: false,
        hidden: true
      });
    };
  };

};

function startGame () {
  makeCells ()
  //add count number to cells
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  //add left and right click options and sounds
  document.addEventListener('click', checkForWin)
  document.addEventListener('click', clicking)
  document.addEventListener('contextmenu', checkForWin)
  document.addEventListener('contextmenu', soundMarked)
  

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
};


  //add audio when clicking
  function soundMarked () {
    var markedSound = new Audio ('sounds/Tick-tick-tick.m4a');
    markedSound.play();
  };
  
  function soundClick () {
    var clickSound = new Audio ('sounds/Click.m4a');
    clickSound.play();
  };
  
  function soundBombFound () {
    var bombFoundSound = new Audio ('sounds/Tick-tick-boom.m4a')
    bombFoundSound.Click.play();
  };
  
  function soundwin () {
    var winSound = new Audio ('sounds/winner.mp3');
    winSound.play();
  };
  
  function clicking () {

    for (i = 0; i < board.cells.length; i++) {

      if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
        soundBombFound();
      } else 
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false){
        soundClick();
      }
    }
  };


//resets the board when button clicked
function resetButton () {
  var reset = document.getElementsByClassName("resetButton");

  reset.addEventListener("click", makeCells)
};


// Define this function to look for a win condition:
function checkForWin () {

    for (i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return
      } else 
      if (board.cells[i].isMine === false && board.cells[i].hidden == true) {
        return
      } 
    }
    lib.displayMessage('You win!')
    soundwin();
  };


  // this adds count of surrounding boxes into each box
function countSurroundingMines (cell) {
  //loop through each `surrounding` and return number of isMine === true
  var count = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  
  for (i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
    }
  }
  return count;
  
};
