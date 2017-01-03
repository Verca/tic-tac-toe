/* eslint no-unused-vars: 0 */
import IndexComponent from './components/IndexComponent';
import ListView from './components/ListView';

// define url route for this module
const mainRoute = 'example';

// define main component for module (this component will be displayed on mainRoute)
const mainComponent = ListView;

// here you can define nested routes
// you have to define at least a path and a component
const arrayOfChildrenRotes = [
  {
    // path: 'detail',
    // component: DetailView,
  },
];

// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// ----------------------------------------------------------
// REWRITE THIS PART ONLY IF YOU KNOW WHAT YOU ARE DOING

// define index component for module (this component will be always displayed)
const indexComponent = IndexComponent;

export default {
  path: mainRoute,
  // async load of children routes
  getChildRoutes(partialNextState, cb) {
    require.ensure([], () => {
      cb(null, arrayOfChildrenRotes);
    });
  },
  // async load of the component (loads only when it's needed)
  getComponent(nextState, cb) {
    require.ensure([], () => {
      cb(null, indexComponent);
    });
  },

  getIndexRoute(partialNextState, cb) {
    // do something async here
    cb(null, {
      component: mainComponent,
    });
  },
};
