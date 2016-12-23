import Immutable from 'immutable';
// epics import
import ticTacToe from './components/ticTacToe/epics/index';
// reducers import
import ticTacReducer from './components/ticTacToe/reducers/index';
import applicationReducer from './components/application/reducers/applicationReducer';

import ticTacState from './components/ticTacToe/moduleState';
import routingStateImmutable from './components/application/applicationState';

import tictacModule from './components/ticTacToe/moduleRegister';

// register your module's application state
const initialStateDraft = {
  routing: routingStateImmutable,
};

initialStateDraft[tictacModule.moduleName] = tictacModule.initialState;
export const initialState = initialStateDraft;

// register your module's epic root
export const epicsRoot = [
  ticTacToe,
];

// register your module's reducer here
const reducersRootDraft = {
  routing: applicationReducer,
};

reducersRootDraft[tictacModule.moduleName] = tictacModule.reducerRoot;

export const reducersRoot = reducersRootDraft;
