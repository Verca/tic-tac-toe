import { EMPTY } from '../constants/marks';

const BOARD_SIZE = 3;

export const getInitBoard = () => {
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    board[row] = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      board[row][col] = EMPTY;
    }
  }
  return board;
};
