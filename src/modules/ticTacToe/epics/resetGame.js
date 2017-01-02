/* eslint no-unused-vars: 0 */
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import Actions, { RESET_GAME } from '../actions/actionsTest';

export default (action$) => action$
  .ofType(RESET_GAME)
  .mergeMap(action => {
    return Observable.of(Actions.resetBoard(), push('/tic-tac-board'));
  });
