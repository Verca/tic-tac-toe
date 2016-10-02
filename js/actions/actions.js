import build from './build';
import * as Actions from '../constants/actions';

export function placeMark(rowIndex, colIndex) {
	return build(Actions.PLACE_MARK, { rowIndex, colIndex });
}

export function displayEndScore(winner) {
	return build(Actions.DISPLAY_END_SCORE, winner);
}

export function switchPlayers() {
	return build(Actions.SWITCH_PLAYERS);
}

export function resetGame() {
	return build(Actions.RESET_GAME);
}
