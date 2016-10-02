import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from './reducers/index';
import initialState from './initialState';
import rootEpic from './epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

 const store = createStore(rootReducer, initialState,
 	applyMiddleware(epicMiddleware));
 
export default store;
