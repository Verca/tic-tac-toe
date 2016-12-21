import Immutable from 'immutable';
import { NO_WINNER, EMPTY, X } from './components/ticTacToe/constants/marks';

const BOARD_SIZE = 3;

export default Immutable.fromJS({
  nextToPlay: X,
  board: getInitBoard(),
  numberOfMoves: 0,
  winner: NO_WINNER
});

function getInitBoard() {
  const board = [];
  for(let row = 0; row < BOARD_SIZE; row++) {
    board[row] = [];
    for(let col = 0; col < BOARD_SIZE; col++) {
      board[row][col] = EMPTY;
    }
  }
  return board;
};
