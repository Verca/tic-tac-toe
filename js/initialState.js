import Immutable from 'immutable';
import { NO_WINNER, X } from './components/ticTacToe/constants/marks';
import { getInitBoard } from './components/ticTacToe/utils/boardUtils';

export default Immutable.fromJS({
  nextToPlay: X,
  board: getInitBoard(),
  numberOfMoves: 0,
  winner: NO_WINNER
});


