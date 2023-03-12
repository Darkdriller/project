var modal = document.getElementById('myModal');


var grid = new Array(3);
grid[0] = new Array(3);
grid[1] = new Array(3);
grid[2] = new Array(3);
var playerType="human"
var player = 1;
var gameWon = 0;
var startPlayer=1;
var moves=[]
var humanPlayer=1;
var aiPlayer=2;

// var gameMode=document.querySelectorAll(".start-game")
// gameMode.addEventListener("click",(event)=>{
//           if (event.target.class="btn"){
//               playerType=event.target.id
//               gameMode.style.display="None"
//           }
// })

const undo_btn = document.querySelector(".undo")
const gameModeEl = document.querySelector('.start-game');

// Disable clicks on elements other than the game mode
// Enable clicks on all elements once game mode is selected
gameModeEl.addEventListener('click', (event) => {
    console.log(event)
    if (event.target.className==="btn"){
      playerType=event.target.id
      gameModeEl.style.display="None"
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            const squareId = '#square_' + ((row * 3) + col + 1);
          document.querySelector(squareId).addEventListener('click', handleClick.bind(null, row, col));
        }
    }
    undo_btn.addEventListener("click", ()=>{
      if (moves){
        undo()
      }
    })
  } 
});

const changeChar= document.querySelector(".changeChar")
changeChar.addEventListener("click",(event)=>{
  console.log(event)
  if (event.target.className==="btn"){
    if (event.target.id!=startPlayer){
      aiPlayer=startPlayer
      humanPlayer=event.target.id
      restart(parseInt(event.target.id))
      console.log(startPlayer,player,parseInt(event.target.id),"aiplayer: ",aiPlayer," human player: ", humanPlayer)
  }
  }
  
})
function updateGrid(row, col, player) {
    grid[row][col] = player === 1 ? 'X' : 'O';
    moves.push([row,col])
}
function undo(){
    last_move=moves.pop()
    var row=last_move[0]
    var col=last_move[1]
    const squareId = '#square_' + ((row * 3) + col + 1)+"_text";
    document.querySelector(squareId).textContent=""
    console.log(squareId)
    grid[row][col]=null
    player=player=== 1 ? 2:1
}
// function handleClick(row, col) {
//   if(playerType==="human"){
//     if (checkLegalMove(row, col)) {
//         const squareId = '#square_' + ((row * 3) + col + 1);
//         if (player === 1) {
//             document.querySelector(squareId + '_text').textContent='X'
//             updateGrid(row, col, 1);
//             if (checkWin(1)) {
//                 endgame(1);
//             }
//             player = 2;
//         } else {
//             document.querySelector(squareId + '_text').textContent='O'
//             updateGrid(row, col, 2);
//             if (checkWin(2)) {
//                 endgame(2);
//             }
//             player = 1;
//         }
//     }
//   }
//   else{
//     if (checkLegalMove(row, col)) {
//       const squareId = '#square_' + ((row * 3) + col + 1);
//       if (humanPlayer === 1) {
//           console.log(squareId)
//           document.querySelector(squareId + '_text').textContent='X'
//           updateGrid(row, col, 1);
//           if (checkWin(1)) {
//               endgame(1);
//           }
//           moves=makeAiMove()
//           const squareId = '#square_' + ((moves.row * 3) +moves.col + 1);
//           document.querySelector(squareId + '_text').textContent='O'
//           updateGrid(row, col, 2);
//           if (checkWin(2)) {
//             endgame(2);
//         }

//       } else {
//           document.querySelector(squareId + '_text').textContent='O'
//           updateGrid(row, col, 2);
//           if (checkWin(2)) {
//               endgame(2);
//           }
//           moves=makeAiMove()
//           const squareId = '#square_' + ((moves.row * 3) +moves.col + 1);
//           document.querySelector(squareId + '_text').textContent='X'
//           updateGrid(row, col, 1);
//           if (checkWin(1)) {
//             endgame(1);
//         }
//       }
//   }
// }
// }

function handleClick(row, col) {
  if(playerType==="human"){
    if (checkLegalMove(row, col)) {
        const squareId = '#square_' + ((row * 3) + col + 1);
        if (player === 1) {
            document.querySelector(squareId + '_text').textContent='X'
            updateGrid(row, col, 1);
            if (checkWin(1)) {
                endgame(1);
            }
            player = 2;
        } else {
            document.querySelector(squareId + '_text').textContent='O'
            updateGrid(row, col, 2);
            if (checkWin(2)) {
                endgame(2);
            }
            player = 1;
        }
    }
  }
  else{
    if (checkLegalMove(row, col)) {
      const squareId = '#square_' + ((row * 3) + col + 1);
      if (humanPlayer === 1) {
          console.log(squareId)
          document.querySelector(squareId + '_text').textContent='X'
          updateGrid(row, col, 1);
          if (checkWin(1)) {
              endgame(1);
          }
          console.log('making Comp Move')
          computerMove()

      } else {
          document.querySelector(squareId + '_text').textContent='O'
          updateGrid(row, col, 2);
          if (checkWin(2)) {
              endgame(2);
          }
          console.log('making Comp Move')

          computerMove()
      }
    }
  }
}




function checkWin(playerNum) {
  //check horizontal
  for (i = 0; i < 3; i++) {
    if ((grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2]) &&  grid[i][0] != undefined && grid[i][1] != undefined && grid[i][2] != undefined) {
     console.log("horizontal won");
      return true;
    }
  }
  //check vertical
  for (i = 0; i < 3; i++) {
    console.log("i is: " + i);
    console.log("grid[" + i + "][0] is " + grid[i][0]);
    console.log("grid[" + i + "][1] is " + grid[i][1]);
    console.log("grid[" + i + "][2] is " + grid[i][2]);
    if ((grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i]) && grid[0][i] != undefined && grid[1][i] != undefined && grid[2][i] != undefined) {
      console.log("vertical won");
      return true;
    }
  }

  //check diagonal
  if (((grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]) || (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0])) && grid[1][1] !== undefined) {
     console.log("diagonal won");
    return true;
  }
  var tieGame = true;
  for (var i = 0; i < 3; i++) {
    for (var x = 0; x < 3; x++) {
      if (grid[i][x] == null && grid[i][x] == undefined) {
        tieGame = false;
      } 
    }
  }

  if (tieGame == true) {
    endgame(0);
  }

  return false;
}

function checkLegalMove(row, column) {
  console.log(grid[row][column]);
  if (grid[row][column] !== undefined && grid[row][column] !== null) {
    return false;
  } else {
    return true;
  }
}

function endgame(num) {
  if (num == 0) {
    document.querySelector(".modal_text").textContent="Tie game!"
    document.querySelector("#myModal").style.display='block'
  }
  if (num == 1) {
    document.querySelector(".modal_text").textContent="Player X Wins!"
    document.querySelector("#myModal").style.display='block'
  }
  if (num == 2) {
    document.querySelector(".modal_text").textContent="Player O Wins!"
    document.querySelector("#myModal").style.display='block'
  }
}
function computerMove() {
  var availableMoves = [];
  for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
          if (grid[i][j] == null) {
              availableMoves.push([i, j]);
          }
      }
  }
  console.log(availableMoves)
  if (availableMoves.length > 0) {
      var randomIndex = Math.floor(Math.random() * availableMoves.length);
      var [row, col] = availableMoves[randomIndex];
      updateGrid(row, col, aiPlayer);
      console.log(row,col)
      const squareId = '#square_' + ((row * 3) + col + 1)+"_text";
      if (aiPlayer===1){
        document.querySelector(squareId).innerHTML = 'X';
      }
      else{
        document.querySelector(squareId).innerHTML = 'O';
      }
      if (checkWin(aiPlayer)) {
          endgame(aiPlayer);
      } else if (availableMoves.length === 0) {
          endgame(0);
      }
  }
}
function restart(Splayer){
    grid = new Array(3);
    grid[0] = new Array(3);
    grid[1] = new Array(3);
    grid[2] = new Array(3);
    startPlayer = Splayer;
    player = startPlayer
    gameWon = 0;
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
          const squareId = '#square_' + ((row * 3) + col + 1)+"_text";
          console.log(squareId)
        document.querySelector(squareId).textContent=""
  }
}
    modal.style.display = "none";
}
console.log(startPlayer)
document.querySelector("#restartBtn").addEventListener("click", ()=>{
  console.log(startPlayer)
  restart(startPlayer)
});


function makeAiMove() {
  var bestScore = -Infinity;
  var move;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      // Check if the spot is available
      if (grid[i][j] == null) {
        grid[i][j] = aiPlayer;
        var score = minimax(grid, 0, false);
        grid[i][j] = null;
        if (score > bestScore) {
          bestScore = score;
          move = { row: i, col: j };
        }
      }
    }
  }
  console.log()
  return move
}

function minimax(grid, depth, isMaximizing) {
  if (checkWin(humanPlayer)) {
    return -10 + depth;
  } else if (checkWin(aiPlayer)) {
    return 10 - depth;
  } else if (isBoardFull()) {
    return 0;
  }

  if (isMaximizing) {
    var bestScore = -Infinity;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // Check if the spot is available
        if (grid[i][j] === null) {
          grid[i][j] = aiPlayer;
          var score = minimax(grid, depth + 1, false);
          grid[i][j] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    var bestScore = Infinity;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        // Check if the spot is available
        if (grid[i][j] == null) {
          grid[i][j] = humanPlayer;
          var score = minimax(grid, depth + 1, true);
          grid[i][j] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}