import { EMPTY } from '../constants/marks';

const checkWinner = (board) => {
  const boardSize = board.length;
  let j, i;

  //check rows
  for(i = 0; i < boardSize; i++) {
    // check row
    if (board[i][0] !== EMPTY) {
      for (j = 1; j < boardSize; j++) {
        if (board[i][j] !== board[i][j - 1]) break;
      }
      if (j === boardSize) {
        return board[i][0];
      }
    }
  }

  // check columns
  for(i = 0; i < boardSize; i++) {
    if(board[0][i] !== EMPTY) {
      for(j = 1; j < boardSize; j++) {
        if(board[j][i] !== board[j-1][i]) break;
      }
      if(j === boardSize) {  return board[0][i]; }
    }
  }

  // check diagonals
  if(board[0][0] != EMPTY) {
    for(i = 1; i < boardSize; i++) {
      if(board[i][i] !== board[i-1][i-1]) break;
    }
    if(i === boardSize) { return board[0][0]; }
  }

  if(board[boardSize-1][0] != EMPTY) {
    for(i = 1; i < boardSize; i++) {
      if(board[boardSize - i - 1][i] !== board[boardSize - i][i - 1]) break;
    }
    if(i === boardSize) { return board[boardSize-1][0]; }
  }
  return EMPTY;
};

export default function (board) {
  return checkWinner(board.toJS());
};