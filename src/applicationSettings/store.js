import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import _ from 'lodash';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { epicsRoot, reducersRoot, initialState } from './appRegister';

const reducers = combineReducers(reducersRoot);

const epicMiddleware = createEpicMiddleware(combineEpics(
  ...(_.flatten(
    ...epicsRoot,
  )),
));

const routeMiddleware = routerMiddleware(browserHistory);
const composeEnhancers = composeWithDevTools({
 // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(reducers, initialState,
  composeEnhancers(applyMiddleware(routeMiddleware, epicMiddleware)));

export default store;
