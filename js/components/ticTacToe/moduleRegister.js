import ticTacReducer from './reducers/index';
import ticTacState from './moduleState';
import ticTacToe from './epics/index';

export const moduleName = 'tictactoe';

// register module
export default {
  moduleName: moduleName,
  reducerRoot: ticTacReducer,
  epicsRoot: ticTacToe,
  initialState: ticTacState
};