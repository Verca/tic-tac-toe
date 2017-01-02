/* eslint no-unused-vars: 0 */
import { Observable } from 'rxjs';
import checkWinner from '../utils/checkWinner';
import Actions, { PLACE_MARK } from '../actions/actionsTest';
import { EMPTY } from '../constants/marks';
import moduleName from '../moduleName';


export default (action$, store) => action$
  .ofType(PLACE_MARK)
  .map(action => {
    const state = store.getState()[moduleName];

    const winner = checkWinner(state.get('board'));
    const numberOfMoves = state.get('numberOfMoves');
    const boardSize = state.get('board').size;
    if (numberOfMoves < (boardSize*3) && winner === EMPTY) {
      return Actions.switchPlayers();
    } else {
      return Actions.displayEndScore(winner);
    }
  });
