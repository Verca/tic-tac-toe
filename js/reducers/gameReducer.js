import initialState from '../initialState';
import {X, O} from '../constants/marks';

export function placeMark(state, action) {
  const rowIndex = action.payload.rowIndex;
  const colIndex = action.payload.colIndex;
  const activePlayer = state.get('nextToPlay');

  return state.setIn(['board', rowIndex, colIndex], activePlayer)
    .set('numberOfMoves', state.get('numberOfMoves') + 1 );
}

export function switchPlayers(state) {
  const activePlayer = state.get('nextToPlay');
  return state.set('nextToPlay', activePlayer === O ? X : O);
}

export function displayEndScore(state, action) {
  const winner = action.payload;
  return state.set('winner', winner);
}

export function resetGame() {
  return initialState;
}
