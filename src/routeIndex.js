import Application from './modules/application/components/Application';

// here you define home route
import homeModule from './modules/homeModule/routeIndex';

// here you define a new route to component
import exampleComponent from './modules/exampleComponent/routeIndex';
// import listOfItemsRoute from './modules/listOfItems/routeIndex';

export default {
  childRoutes: [{
    path: '/',
    component: Application,
    childRoutes: [
      exampleComponent,
      // listOfItemsRoute,
    ],
    indexRoute: homeModule,
  }],
};
