import EndGameView from './components/EndGameView';
import Board from './components/Board';

// here you can define nested routes
// you have to at least define path and component
const arrayOfChildrenRotes = [
  {
    path: 'score',
    component: EndGameView
  }
];

export default {
  path: 'tic-tac-board',
  // async load of children routes
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, arrayOfChildrenRotes)
    })
  },
  // async load of the component (loads only when it's needed)
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Board)
    })
  }
};
