import build from '../../../utils/buildAction';
import * as Actions from '../constants/actions';

export const placeMark = (rowIndex, colIndex) => {
	return build(Actions.PLACE_MARK, { rowIndex, colIndex });
};

export const displayEndScore = (winner) => {
	return build(Actions.DISPLAY_END_SCORE, winner);
};

export const switchPlayers = () => {
	return build(Actions.SWITCH_PLAYERS);
};

export const resetGame = () => {
	return build(Actions.RESET_GAME);
};
