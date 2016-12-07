import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { Router, Route, browserHistory } from 'react-router';
	
import store from './store';
import Application from './components/Application';
import Board from './components/ticTacToe/components/Board';
import Menu from './components/Menu';

import '../node_modules/normalize.css/normalize.css';
import '../assets/css/game.css';

import routeIndex from './components/ticTacToe/routeIndex';

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: Application,
    childRoutes: [
      routeIndex,
    ]
  } ]
};

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={rootRoute} />
  </Provider>
), document.getElementById('app'));
