import { Observable } from 'rxjs';
import Actions from '../actions/actionsTest';
import { DISPLAY_END_SCORE } from '../actions/actionsTest';
import { push } from 'react-router-redux';

export default (action$, store) => action$
  .ofType(DISPLAY_END_SCORE)
  .mergeMap(action => {
    return Observable.of(Actions.setWinner(action.payload), push('tic-tac-board/score'));
  });
