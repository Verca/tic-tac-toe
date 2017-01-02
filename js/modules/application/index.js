import Application from './components/Application';

// here you define a new route to component
import routeIndex from '../ticTacToe/routeIndex';

export default {
  childRoutes: [{
    path: '/',
    component: Application,
    childRoutes: [
      routeIndex,
    ],
  }],
};
