/* eslint no-unused-vars: 0 */
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import Actions, { DISPLAY_END_SCORE } from '../actions/actionsTest';

export default (action$) => action$
  .ofType(DISPLAY_END_SCORE)
  .mergeMap(action => {
    return Observable.of(Actions.setWinner(action.payload), push('tic-tac-board/score'));
  });
