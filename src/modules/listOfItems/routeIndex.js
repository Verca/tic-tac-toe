/* eslint no-unused-vars: 0 */
import ListView from './components/ListView';

// define url route for this module
const mainRoute = 'list';

// define main component for module (this component will be always displayed)
const mainComponent = ListView;

// here you can define nested routes
// you have to define at least a path and a component
const arrayOfChildrenRotes = [
  // {
  //   path: 'score',
  //   component: EndGameView,
  // },
];

// ----------------------------------------------------------
// ----------------------------------------------------------

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
      cb(null, mainComponent);
    });
  },
};
