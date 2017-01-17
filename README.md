# Tic tac toe

## Install

To install, please execute this command:

`npm install`

## Run
To run this application, install it and then run these commands (in separate terminal windows):

`npm run build`

`npm run start` or `npm run start-inline` if you want page to ber refreshed after every change.

Application runs on `localhost:8080`

In the case of trouble, try to run `npm install -g webpack-dev-server` and then try to run `npm run start` again.

## Unit tests
You can check `src/modules/exampleModule/reducers/listReducer.spec.js` to see an example of unit testing. 

To run tests, please execute this command:

`npm run test`

# Modules
Module is an independent unit. You can perceive it as an independent tab in the page. It has it's own routing address, isolated part of the global application state, reducers, actions, epics and components. 

##How to create a new module

Let's say we want to create a module named "dashboard". We will use a module named `exampleModule` as our initial template.

1. Copy folder `src/modules/exampleModule` to the same source file as `src/modules/dashboard`

    ```
        cp -R src/modules/exampleModule/ src/modules/dashboard
    ```
2. In the file `src/modules/dashboard/moduleName.js` change name of module: 

    `const moduleName = 'dashboard';` 

3. In the file `src/modules/dashboard/routeIndex.js` we need to change our main route:
    
    ```javascript
    // define url route for this module
    const mainRoute = 'dashboard';
    ```
    
4. Now let's register our module in application! 
    1. Open file `src/modulesRegister.js`. We will register our reducers, epics and module state. 
        
        First import our new module in the beginning of this file:
        ```javascript
           import dashboard from './modules/dashboard/moduleRegister';
        ```
        then add our module to the array
        ```javascript
          export default [
            ...
            dashboard,
          ];
        ```
    2. Open file `src/routeIndex.js`. In here we will register our routes file.
    
        First import our module routing index in the beginning of this file:
        
        ```javascript
           import dashboard from './modules/dashboard/routeIndex';
        ```
        
        then add imported `dashboard` to the array of childRoutes
        ```javascript
        export default {
          childRoutes: [{
            path: '/',
            component: Application,
            childRoutes: [
              ...
              dashboard,
            ],
            ...
          }],
        };
        ```
5. Let's add our new module to the menu now. In the file `src/modules/application/components/Menu.jsx` add `dashboard` link:
    ```jsx harmony
        <ul className={styles.menu}>
         ...
         <li><Link to="/dashboard" className={styles.menuLink} activeClassName={styles.active}>Dashboard</Link></li>
        </ul>
    ```
Now you are all set! You can launch application and navigate to the new module.

## Module documentation
We will describe the whole module structure in this section. 

        
        exampleModule
        └───actions
        └───components
        └───constants
        └───epics
        └───reducers
        └───styles
        └───utils
        |moduleName.js
        |moduleRegister.js
        |moduleState.js
        |routeIndex.js
### Config files of the module        
First lets explain config files located in the root directory of the module.

        moduleName.js
        moduleRegister.js
        moduleState.js
        routeIndex.js
        
#### moduleName.js
In the `moduleName.js` you specify name of your module. This name have to be unique in the project.  Just set the `moduleName` variable.
```javascript
const moduleName = 'exampleComponent';
```

#### moduleRegister.js
In the `moduleRegister.js` all important redux index files and module settings files are linked together for this module (module state, epics, reducers and module name). You should not change this file unless you know what you are doing. 

#### moduleState.js
In the `moduleState.js` you specify state of your module. 

 - This part of the state will be accessible only from local module's reducers (other module's reducers can't see this part of application state)
 - However every component can read the whole app state. If you are interested in module's part of component, then you need to access moduleName property of it. (for more info see components documentation of the module)
 - Also every epic can read the whole app state (none of the epics should be writing to the state!). Again, if you are interested in module's part of component, then you need to access moduleName property of it. See module's epic documentation.
```javascript
export default Immutable.fromJS({
  // here you'll put your module's state object
});
```
#### routeIndex.js
In the `routeIndex.js` you specify routes of your module. 

- **Url route:** For specifying url route of your module, change `mainRoute` variable (you should not put any slashes in the beginning or the end of the string!).
- **Main (home) component:** To specify home component (component, which will be visible, when you enter the route url), please assign it to the `mainComponent` variable (don't forget to import this component to the file first).
- **Children routes:** Children routes are routes nested in our defined `mainRoute`. In example below, when you enter route `example/detail`, then you will see `DetailView` component (and not `ListView` anymore). 
    
    Every object in this array represents a new route object. If want to define more nested routes for it, then you can add `childrenRoute` array to the object.

```javascript
const mainRoute = 'example';

const mainComponent = ListView;

const arrayOfChildrenRotes = [
  {
    path: 'detail',
    component: DetailView,
  },
];
```

### Actions folder
        actions.js
Actions contains only one file `actions.js`. Every module's action is registered in it as variable.

```javascript
... 

export const LOAD_ITEMS = 'loadItems';
export const DISPLAY_ITEMS = 'displayItems';

export default transform(ActionTest, moduleName);
```

For example `export const LOAD_ITEMS = 'loadItems';` 
- If we want to import action type (useful in index reducer) we import `LOAD_ITEMS` from `actions.js` file. 
- For calling this action (in components or epics):
    - import `import Actions from '../actions/actions';` in the beginning of the file
    - then you can simply call `Actions.loadItems()`
        - note: if you want to add payload to this action, then add it as a first parameter (second parameter won't be passed at all). For passing more items wrap them in the object.
        
### Components folder
Components folder should contain all module's components. You will find example components in `exampleModule` of this project. 

Important parts of component:

```javascript
    

```
    