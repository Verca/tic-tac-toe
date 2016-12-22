import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import _ from 'lodash';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import Immutable from 'immutable';
import { epicsRoot, reducersRoot } from './appRegister';
import initialState from './initialState';

import ticTacReducer from './components/ticTacToe/reducers/index';
const routingStateImmutable = Immutable.fromJS({
                                                 locationBeforeTransitions: null
                                               });
const inState = Immutable.fromJS({one: {}, two: {}});
const inStateJS = {one: one, two: two, routing: routingStateImmutable};

const one = Immutable.fromJS({});
const two = Immutable.fromJS({});




import applicationReducer from './components/application/reducers/applicationReducer'
const reducers = combineReducers({
                                   // applicationReducer,
                                   // ticTacReducer,
                                   one: (state = one) => state,
                                   two: (state = two) => state,
  routing: applicationReducer,
                                 });
const epicMiddleware = createEpicMiddleware(combineEpics(
  ...(_.flatten(
    ...epicsRoot
  ))
));

const routeMiddleware = routerMiddleware(browserHistory);

const store = createStore(reducers, inStateJS,
  applyMiddleware(epicMiddleware, routeMiddleware));
console.info('all good');
// const middlewares = [epicMiddleware, routeMiddleware];
//
// const store = compose(
//   applyMiddleware.apply(this, middlewares)
// )(createStore)(combineReducers);
export default store;
