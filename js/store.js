import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { epicsRoot, reducersRoot, initialState } from './utils/appRegister';

const reducers = combineReducers(reducersRoot);

const epicMiddleware = createEpicMiddleware(combineEpics(
  ...(_.flatten(
    ...epicsRoot,
  )),
));

const routeMiddleware = routerMiddleware(browserHistory);

const store = createStore(reducers, initialState,
  applyMiddleware(routeMiddleware, epicMiddleware));

export default store;
