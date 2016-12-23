import { Observable } from 'rxjs';
import { resetBoard } from '../actions/actions';
import { RESET_GAME } from '../constants/actions';
import { push } from 'react-router-redux';

export default (action$, store) => action$
  .ofType(RESET_GAME)
  .mergeMap(action => {
    return Observable.of(resetBoard(), push('/tic-tac-board'));
  });
