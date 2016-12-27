import { Observable } from 'rxjs';
import Actions from '../actions/actionsTest';
import { RESET_GAME } from '../actions/actionsTest';
import { push } from 'react-router-redux';

export default (action$, store) => action$
  .ofType(RESET_GAME)
  .mergeMap(action => {
    return Observable.of(Actions.resetBoard(), push('/tic-tac-board'));
  });
