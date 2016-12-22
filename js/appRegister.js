import Immutable from 'immutable';
// epics import
import ticTacToe from './components/ticTacToe/epics/index';
// reducers import
import ticTacReducer from './components/ticTacToe/reducers/index';
import applicationReducer from './components/application/reducers/applicationReducer';

import ticTacState from './components/ticTacToe/moduleState';
import routingStateImmutable from './components/application/applicationState';

// register your module's application state
export const initialState = {
  ticTacReducer: ticTacState,
  routing: routingStateImmutable,
};

// register your module's epic root
export const epicsRoot = [
  ticTacToe,
];

// register your module's reducer here
export const reducersRoot = {
  ticTacReducer,
  routing: applicationReducer,
};