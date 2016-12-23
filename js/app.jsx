import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './store';
import { moduleName } from './modules/application/moduleRegister';

// load style sheets
import '../node_modules/normalize.css/normalize.css';
import '../assets/css/game.css';

// load root route index
import rootRoute from './modules/application/index';
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state[moduleName].toJS()
});

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={rootRoute} />
  </Provider>
), document.getElementById('app'));
