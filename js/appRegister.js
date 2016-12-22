// epics import
import ticTacToe from './components/ticTacToe/epics/index';
// reducers import
import ticTacReducer from './components/ticTacToe/reducers/index';
import applicationReducer from './components/application/reducers/applicationReducer';

// register your module's epic root
export const epicsRoot = [
  ticTacToe,
];

// register your module's reducer here
export const reducersRoot = {
  applicationReducer,
  ticTacReducer,
};