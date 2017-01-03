import Application from './application/components/Application';

// here you define a new route to component
import listOfItemsRoute from './listOfItems/routeIndex';

export default {
  childRoutes: [{
    path: '/',
    component: Application,
    childRoutes: [
      listOfItemsRoute,
    ],
  }],
};
