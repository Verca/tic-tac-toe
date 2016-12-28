import * as gameReducer from './gameReducer';
import * as Actions from '../actions/actionsTest';
import moduleName from '../moduleName';

const reducerMapping = {
  [Actions.PLACE_MARK]: gameReducer.placeMark,
  [Actions.SWITCH_PLAYERS]: gameReducer.switchPlayers,
  [Actions.SET_WINNER]: gameReducer.setWinner,
  [Actions.RESET_BOARD]: gameReducer.resetBoard,
};

export default (state = 0, action) => {
  if(reducerMapping[action.type] && action.moduleName === moduleName) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
