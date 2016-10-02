import { Observable } from 'rxjs';
import { switchPlayers, displayEndScore } from '../actions/actions';
import checkWinner from '../utils/checkWinner';
import { PLACE_MARK } from '../constants/actions';
import { EMPTY } from '../constants/marks';

export default (action$, store) => action$
  .ofType(PLACE_MARK)
  .mergeMap(action =>
    Observable.of(
        checkWinner(store.getState().get('board')))
    .map(winner =>  {
      const numberOfMoves = store.getState().get('numberOfMoves');
      const boardSize = store.getState().get('board').size;
      if(numberOfMoves < (boardSize*3) && winner == EMPTY) {
        return switchPlayers();
      } else {
        return displayEndScore(winner);
      }
    }));
