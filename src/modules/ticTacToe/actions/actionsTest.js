import moduleName from '../moduleName';
import transform from '../../../applicationSettings/buildActionTest';
import * as ActionTest from './actionsTest';

export const PLACE_MARK = 'placeMark';
export const SWITCH_PLAYERS = 'switchPlayers';
export const DISPLAY_END_SCORE = 'displayEndScore';
export const RESET_BOARD = 'resetBoard';
export const RESET_GAME = 'resetGame';
export const SET_WINNER = 'setWinner';

export default transform(ActionTest, moduleName);
