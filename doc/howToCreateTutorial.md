# Create a new tutorial module
A module is an independent unit. You can perceive it as an independent tab in the page. It has its own routing address, isolated part of the global application state, reducers, actions, epics, and components. 

1. Copy the folder `doc/tutorialModule` to the `src` source file as `src/modules/tutorialModule`

    ```
        cp -R doc/tutorialModule src/modules/tutorialModule
    ```
    
4. Now let's register our module in the application! 
    1. Open file `src/modulesRegister.js`. We will register our reducers, epics and module state. 
        
        First import our new module in the beginning of this file:
        ```javascript
           import tutorialModule from './modules/tutorialModule/moduleRegister';
        ```
        then add our module to the array
        ```javascript
          export default [
            ...
            tutorialModule,
          ];
        ```
    2. Open file `src/routeIndex.js`. In here we will register our routes file.
    
        First import our module routing index in the beginning of this file:
        
        ```javascript
           import tutorial from './modules/tutorialModule/routeIndex';
        ```
        
        then add the imported `tutorial` to the array of childRoutes
        ```javascript
        export default {
          childRoutes: [{
            path: '/',
            component: Application,
            childRoutes: [
              ...
              tutorial,
            ],
            ...
          }],
        };
        ```
5. Let's add our new module to the menu now. In the file `src/modules/application/components/Menu.jsx` add a `tutorial-module` link:
    
    ```
        <ul className={styles.menu}>
         ...
         <li><Link to="/tutorial-module" className={styles.menuLink} activeClassName={styles.active}>Tutorial Module</Link></li>
        </ul>
    ```
    
Now you are all set! You can launch the application and navigate to the new module.

**It will be empty page for now, but let's change it by following the [How-To module tutorial](docs/howToModuleGuide.md)**

