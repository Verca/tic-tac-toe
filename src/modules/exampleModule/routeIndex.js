import store from 'applicationSettings/store';

import IndexComponent from '../../common/indexComponent/IndexComponent';
import ListView from './components/ListView';
import { dummyExtended } from './actions/extendedActions';

/**
 * path - defines url route for this module
 * indexRoute/component - defines home component for module (this component will be
 *                        displayed on mainRoute)
 * childRoutes -  are nested routes
 *             - you have to define at least a path and a component for each child route
 *
 * component - default settings, don't change it unless you know what you're doing.
 *           - This component will be always displayed when main route is active.
 **/

export default {
  path: 'example',
  indexRoute: {
    component: ListView,
  },
  childRoutes: [],
  component: IndexComponent,
  onEnter: () => {
    store.dispatch(dummyExtended()).then(() => {
      // console.info('resolved', store.getState().exampleComponent.get('test'));
    });
  },
};
