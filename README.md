# Tic tac toe

## Install

To install, please execute this command:

`npm install`

## Run
To run this application, install it and then run these commands (in separate terminal windows):

`npm run build`

`npm run start` or `npm run start-inline` if you want to a page refresh after every change

Application runs on `localhost:8080`

In the case of trouble, try to run `npm install -g webpack-dev-server` and then try to run `npm run start` again.

## Unit tests
You can check `reducers/listReducer.spec.js` to see an example of unit testing. 

To run tests, please execute this command:

`npm run test`

## Modules
Module is an independent unit. You can perceive it as an independent tab in the page. It has it's own routing address, isolated part of the global application state, reducers, actions, epics and components. 

#How to create a new module

Let's say we want to create a module named "dashboard". We will use a module named `exampleModule` as our initial template.

1. Copy folder `src/modules/exampleModule` to the same source file as `src/modules/dashboard`

    ```
        cp -R src/modules/exampleModule/ src/modules/dashboard
    ```
2. In the file `src/modules/dashboard/moduleName.js` an change name of module: 

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
