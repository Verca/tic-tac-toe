import EndGameView from './components/EndGameView';
import Board from './components/Board';

// define main component for module
// this component will be always displayed
const mainComponent = Board;

// define url route for module
const mainRoute = 'tic-tac-board';

// here you can define nested routes
// you have to define at least a path and a component
const arrayOfChildrenRotes = [
  {
    path: 'score',
    component: EndGameView
  }
];

// ----------------------------------------------------------

export default {
  path: mainRoute,
  // async load of children routes
  childRoutes: arrayOfChildrenRotes,
  // async load of the component (loads only when it's needed)
  component: Board
};
