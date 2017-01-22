# Modules
A module is an independent unit. You can perceive it as an independent tab in the page. It has its own routing address, isolated part of the global application state, reducers, actions, epics, and components. 

## How to create a new module

Let's say we want to create a module named "dashboard". We will use a module named `exampleModule` as our initial template.

1. Copy the folder `src/modules/exampleModule` to the same source file as `src/modules/dashboard`

    ```
        cp -R src/modules/exampleModule/ src/modules/dashboard
    ```
2. In the file `src/modules/dashboard/moduleName.js`, change the name of the module: 

    `const moduleName = 'dashboard';` 

3. In the file `src/modules/dashboard/routeIndex.js` we need to change our main route:
    
    ```javascript
           path: 'dashboard'
    ```
    
4. Now let's register our module in the application! 
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
        
        then add the imported `dashboard` to the array of childRoutes
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
5. Let's add our new module to the menu now. In the file `src/modules/application/components/Menu.jsx` add a `dashboard` link:
    
    ```
        <ul className={styles.menu}>
         ...
         <li><Link to="/dashboard" className={styles.menuLink} activeClassName={styles.active}>Dashboard</Link></li>
        </ul>
    ```
    
Now you are all set! You can launch the application and navigate to the new module.
