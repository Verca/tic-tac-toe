import * as gameReducer from './gameReducer';
import * as Actions from '../constants/actions';

export default (state, action) => {
	console.info('action type ' + action.type + ', payload: ', action.payload);
	switch(action.type) {
		case Actions.PLACE_MARK:
			return gameReducer.placeMark(state, action);

		case Actions.SWITCH_PLAYERS:
			return gameReducer.switchPlayers(state, action);

		case Actions.DISPLAY_END_SCORE:
			return gameReducer.displayEndScore(state, action);

		case Actions.RESET_GAME:
			return gameReducer.resetGame(state, action);

		default:
			return state;
	}
};
