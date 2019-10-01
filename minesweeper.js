document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: []
}

  // automatically generate the board
function makeCells () {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      board.cells.push({
        row: i, 
        col: j, 
        isMine: true, 
        isMarked: false,
        hidden: true
      });
    }
  }
}
 



function startGame () {
  //reset board when game is started
  makeCells();
  
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  //add left and right click options 
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)

  //add audio when clicking
  var clickSound = new Audio ('')
  document['click']

  var markedSound = new Audio ('')
  document['contextmenu']

  var bombFoundSound = new Audio ('')
  

  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
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
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
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
    
}
