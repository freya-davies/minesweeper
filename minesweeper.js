document.addEventListener('DOMContentLoaded', startGame)

//Change background of board
// document.body.style.background = "url('[https://i.pinimg.com/originals/ac/5d/4d/ac5d4d46396505c6fb8d4fa6b8f20d9e.jpg]')";

// Define your `board` object here!
var board = {
  cells: []
}

  // automatically generate the board
function makeCells () {

  //generate random number to see if square has a bomb in it or not
  //this only added the SAME random outcome in and I couldn't make it work. Leaving in because I might come back and work on it later. 
  // var getRandomNum = Math.floor(Math.random() * 2)
  
  // function randomNum (getRandomNum) {
  //   if (getRandomNum === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   };
  // };
  // console.log(randomNum(getRandomNum))
  //   console.log(getRandomNum)


  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      board.cells.push({
        row: i, 
        col: j, 
        isMine: Boolean(Math.floor(Math.random() * 2)),
        isMarked: false,
        hidden: true
      });
    };
  };
console.log(board)

};




function startGame () {
  //reset board when game is started
  makeCells();
  
  //add count number to cells
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
