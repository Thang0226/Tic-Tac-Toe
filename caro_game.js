let b = document.getElementById("carogame");

let board = [];
let data = "";
let turn = false;

// create a 5x5 array
for (let i = 0; i < 5; i++) {
  board[i] = new Array("-", "-", "-", "-", "-");
}

// create html script to show the array
for (let i = 0; i < 5; i++) {
  data += "<br>";
  for (let j = 0; j < 5; j++) {
    data += board[i][j] + "&nbsp;&nbsp;";
  }
}
b.innerHTML = data;

// when player click button Change Value (player 0 is x, player 1 is o):
function changeValue() {
  let posX = +prompt("X (1-5):");
  let posY = +prompt("Y (1-5):");
  // change element at position (x,y) in array
  if (turn) {
    board[posX - 1][posY - 1] = "o";
  } else {
    board[posX - 1][posY - 1] = "x";
  }
  // create html script to show the changed array
  data = "";
  for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;&nbsp;";
    }
  }
  b.innerHTML = data;

  // alert if player 0 or player 1 wins
  if (winGame()) {
    if (turn) {
      alert("O Wins!");
    } else {
      alert("X Wins!");
    }
  }

  turn = !turn;
}

function winGame() {
  // for elements at the edge
  for (let j = 1; j < 4; j++) {
    if (
      (board[0][j] == "o" &&
        board[0][j - 1] == "o" &&
        board[0][j + 1] == "o") ||
      (board[4][j] == "o" &&
        board[4][j - 1] == "o" &&
        board[4][j + 1] == "o") ||
      (board[j][0] == "o" &&
        board[j - 1][0] == "o" &&
        board[j + 1][0] == "o") ||
      (board[j][4] == "o" &&
        board[j - 1][4] == "o" &&
        board[j + 1][4] == "o") ||
      (board[0][j] == "x" &&
        board[0][j - 1] == "x" &&
        board[0][j + 1] == "x") ||
      (board[4][j] == "x" &&
        board[4][j - 1] == "x" &&
        board[4][j + 1] == "x") ||
      (board[j][0] == "x" &&
        board[j - 1][0] == "x" &&
        board[j + 1][0] == "x") ||
      (board[j][4] == "x" && board[j - 1][4] == "x" && board[j + 1][4] == "x")
    ) {
      return true;
    }
  }

  // for elements inside
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (
        board[i][j] == "o" &&
        ((board[i][j - 1] == "o" && board[i][j + 1] == "o") ||
          (board[i - 1][j] == "o" && board[i + 1][j] == "o") ||
          (board[i - 1][j - 1] == "o" && board[i + 1][j + 1] == "o") ||
          (board[i - 1][j + 1] == "o" && board[i + 1][j - 1] == "o"))
      )
        return true;

      if (
        board[i][j] == "x" &&
        ((board[i][j - 1] == "x" && board[i][j + 1] == "x") ||
          (board[i - 1][j] == "x" && board[i + 1][j] == "x") ||
          (board[i - 1][j - 1] == "x" && board[i + 1][j + 1] == "x") ||
          (board[i - 1][j + 1] == "x" && board[i + 1][j - 1] == "x"))
      )
        return true;
    }
  }
  return false;
}
