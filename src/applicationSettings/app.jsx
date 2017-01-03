import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'rxjs';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import moduleName from '../modules/application/moduleName';


// load root route index
import rootRoute from '../modules/routeIndex';

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state[moduleName].toJS(),
});

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={rootRoute} />
  </Provider>
), document.getElementById('app'));
