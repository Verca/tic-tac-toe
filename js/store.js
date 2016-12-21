import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import _ from 'lodash';

import { epicsRoot, reducersRoot } from './appRegister';
import initialState from './initialState';

const epicMiddleware = createEpicMiddleware(combineEpics(
  ...(_.flatten(
    ...epicsRoot
  ))
));

const store = createStore(...reducersRoot, initialState,
  applyMiddleware(epicMiddleware));
 
export default store;
