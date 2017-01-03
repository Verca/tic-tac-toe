import Application from './modules/application/components/Application';

// here you define home route
import homeModule from './modules/homeModule/routeIndex';

// here you define a new route to component
import exampleModule from './modules/exampleModule/routeIndex';
// import listOfItemsRoute from './modules/listOfItems/routeIndex';

export default {
  childRoutes: [{
    path: '/',
    component: Application,
    childRoutes: [
      exampleModule,
      // listOfItemsRoute,
    ],
    indexRoute: homeModule,
  }],
};
