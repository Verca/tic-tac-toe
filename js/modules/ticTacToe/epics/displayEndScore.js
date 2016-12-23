import { Observable } from 'rxjs';
import { setWinner } from '../actions/actions';
import { DISPLAY_END_SCORE } from '../constants/actions';
import { push } from 'react-router-redux';

export default (action$, store) => action$
  .ofType(DISPLAY_END_SCORE)
  .mergeMap(action => {
    return Observable.of(setWinner(action.payload), push('tic-tac-board/score'));
  });
