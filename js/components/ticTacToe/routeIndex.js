import EndGameView from './components/EndGameView';
import Board from './components/Board';

const arrayOfChildrenRotes = [
  {
    path: 'score,',
    component: EndGameView
  }
];

export default {
  path: 'tic-tac-board',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, arrayOfChildrenRotes)
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Board)
    })
  }
};
