import { Observable } from 'rxjs';
import { switchPlayers, displayEndScore } from '../actions/actions';
import checkWinner from '../utils/checkWinner';
import { PLACE_MARK } from '../constants/actions';
import { EMPTY } from '../constants/marks';
import moduleRegister from '../moduleRegister';

export default (action$, store) => action$
  .ofType(PLACE_MARK)
  .map(action => {
    const state = store.getState()[moduleRegister.moduleName];

    const winner = checkWinner(state.get('board'));
    const numberOfMoves = state.get('numberOfMoves');
    const boardSize = state.get('board').size;
    if (numberOfMoves < (boardSize*3) && winner == EMPTY) {
      return switchPlayers();
    } else {
      return displayEndScore(winner);
    }
  });
