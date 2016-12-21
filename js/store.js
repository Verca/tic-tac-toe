import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import _ from 'lodash';

import { epicsRoot } from './appRegister';
import rootReducer from './reducers/index';
import initialState from './initialState';

const epicMiddleware = createEpicMiddleware(combineEpics(
  ...(_.flatten(
    ...epicsRoot
  ))
));

 const store = createStore(rootReducer, initialState,
 	applyMiddleware(epicMiddleware));
 
export default store;
