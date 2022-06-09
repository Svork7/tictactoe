let players = ['x', 'o'];
let activePlayer = 0;

let counter = 0;

let field = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function checkWin() {
  let turn = players[activePlayer];
  for (let i = 0; i <= 2; i++) {
    for (let y = 0; y <= 2; y++) {
      if (field[i][0] == turn && field[i][1] == turn && field[i][2] == turn) {
        showWinner(activePlayer);
      } 
      else if (field[0][y] == turn && field[1][y] == turn && field[2][y] == turn) {
        showWinner(activePlayer);
      } 
      else if (field[0][0] == turn && field[1][1] == turn && field[2][2] == turn) {
        showWinner(activePlayer);
      } 
      else if (field[0][2] == turn && field[1][1] == turn && field[2][0] == turn) {
        showWinner(activePlayer);
      }
    }
  }
}

function startGame() {

  field = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  renderBoard(field);
  counter = 0;
};

function click(row, col) {
  console.log(row,col)

  if (counter % 2 == 0) {
    activePlayer = 0;
  } else {
    activePlayer = 1;
  }

  field[row][col] = players[activePlayer];
  renderBoard(field);
  checkWin();

  counter++;

};