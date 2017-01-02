import Immutable from 'immutable';
import { NO_WINNER, X } from './constants/marks';
import { getInitBoard } from './utils/boardUtils';

export default Immutable.fromJS({
  nextToPlay: X,
  board: getInitBoard(),
  numberOfMoves: 0,
  winner: NO_WINNER,
});
