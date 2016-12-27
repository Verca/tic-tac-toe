import * as gameReducer from './gameReducer';
import * as Actions from '../actions/actionsTest';

export default (state = 0, action) => {
	switch(action.type) {
		case Actions.PLACE_MARK:
      return gameReducer.placeMark(state, action);

		case Actions.SWITCH_PLAYERS:
			return gameReducer.switchPlayers(state, action);

		case Actions.SET_WINNER:
			return gameReducer.setWinner(state, action);

		case Actions.RESET_BOARD:
			return gameReducer.resetBoard(state, action);
	}
  return state;
};
