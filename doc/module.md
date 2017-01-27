# Module documentation
This section describes the entire module structure. 

**It's recommended to try our [How-To module tutorial](howToModuleGuide.md) first.** 
Because it will give an overview on how parts of module works together.

        
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
## Module config files        
First let's explain config files located in the root directory of the module.

        moduleName.js
        moduleRegister.js
        moduleState.js
        routeIndex.js
        
### moduleName.js
In the `moduleName.js` you specify the name of your module. This name has to be unique in the project. Just set the `moduleName` variable.

```javascript
const moduleName = 'exampleComponent';
```

### moduleRegister.js
In the `moduleRegister.js,` all important redux index files and module settings files are linked together for this module (module state, epics, reducers, and module name). You should not change this file unless you know what you are doing. 

### moduleState.js
In the `moduleState.js` you specify the state of your module.
##### State is stored as ImmutableJS
 - Module's state is saved as an [ImmtableJS](https://facebook.github.io/immutable-js/) Record. Every top property of module's state has to be defined in its `moduleState.js` file (because Record works like a data model here).
 - Inside of the state, we can store only primitive types or ImmutableJS structures. `List` for example.

##### Module's state is independent
 - This part of the state will be accessible only from reducers of this module (other module's reducers can't see this part of application state) 
 - However, every component can read the whole app state. If you are interested in module's part of a component, then you need to access the moduleName property of it. (for more info see components documentation of the module)
 - Also, every epic can read the whole app state (none of the epics should be writing to the state!). If you are interested in module's part of a component, then you need to access the moduleName property of it. See module's epic documentation.

```javascript
import { Record } from 'immutable';

const ModuleState = Record({
  // add state props here
});

export default new ModuleState();
```
### routeIndex.js
In the `routeIndex.js` you specify routes of your module. 

- **Url route:** To specify url route of your module, change `path` property (you should not put any slashes in the beginning or the end of the string!).
- **Main (home) component:** To specify home component (component, which will be visible, when you enter the route url), please assign it to the `indexRoute/component` property (don't forget to import this component to the file first).
- **Children routes:** Children routes are routes nested in our defined `path`. In the example below, when you in your browser enter route `example/detail`, you will see `DetailView` component (and not `ListView` anymore). 
    
    Every object in this array represents a new route object. If you want to define more nested routes for it, then you can add `childnRoute` array to the object.
- **Default component:** default settings; don't change it unless you know what you're doing. This component will be always displayed when the main route is active. Always add `{this.props.children}` to this component or none of the defined routes here will be displayed. See the documentation for `react-router`.

```javascript
export default {
  path: 'example',
  indexRoute: {
    component: ListView,
  },
  childRoutes: [],
  component: IndexComponent,
};
```

## Actions directory
Actions contains only one file `actions.js`. It's a place to define actions related to this module.

```javascript
... 
const actions = {
  LOAD_ITEMS: 'loadItems',
  DISPLAY_ITEMS: 'displayItems',
};

export default transform(actions, moduleName);
```

For example `eLOAD_ITEMS: 'loadItems',` 
- If we want to import action type (useful in index reducer) we import `Action.LOAD_ITEMS` from `actions.js` file. 
- To call this action (in components or epics):
    - import `import Actions from '../actions/actions';` in the beginning of the file
    - then you can simply call `Actions.loadItems()`
        - note: if you want to add a payload to this action, then add it as a first parameter ( the second parameter won't be passed at all). For passing more items wrap them in the object.
        
## Components directory
Components directory should contain all module's components. You will find example components in `exampleModule` of this project. 

Important parts of component:

#### shouldComponentUpdate
This project uses [ImmutableJs](https://facebook.github.io/immutable-js/) for application state. `shallowCompare` function in this case improves component performance.
Leave this function, as it is, in all of your components.

```javascript
   shouldComponentUpdate(nextProps, nextState) {
     // always leave shallowCompare in here
     return shallowCompare(this, nextProps, nextState);
   }   

```
#### propTypes
Always define all your props of your component.
```javascript
  static propTypes = {
    dispatch: React.PropTypes.func,
    loading: React.PropTypes.bool,
  }
```
    
#### connect
To define component props taken from the application state you can use either variable `appState` or `moduleState` (that's simply a shortcut to access module's state).

```javascript
export default connect((appState) => {
  const moduleState = appState[moduleName];
  return {
    loading: moduleState.get('loading'),
  };
})(LoadButton);
```

## Constants directory
All files with constants which relate to this module should go here. 

Example: we can place a file `httpUrls.js` with this content:

```javascript
export const GET_LIST = 'https://jsonplaceholder.typicode.com/users';
export const GET_ITEM = 'https://jsonplaceholder.typicode.com/user';
```

## Epics directory

This project uses [redux-observable](https://github.com/redux-observable/redux-observable) middleware.
It listens for action and triggers a code when this action is dispatched.

#### How to create an epic:
1. Create a file with epic in the epic directory. See examples below.
2. Register it in `epics/index.js` of this module.
    - Import you epic. For example `import loadItems from './loadItems';` in the beginning of the file.
    - Add line (element) `loadItems,` to the `export default []` array.

#### It's useful tool for:
- For handling asynchronous code like API calls. (This should be always handled in middleware. Never ever put an asynchronous code to the reducers or components!)
- Action chaining. For example if you want to trigger actions `Actions.saveUser(data)` and then `closeModal()`.

#### Api call example:
```javascript
import { push } from 'react-router-redux';
import Actions from '../actions/actions';

export default action$ => action$
  .ofType(Actions.LOAD_ITEMS)
  .mergeMap(() => fetchItems()) 
  .map(response => Actions.displayItems(response.data))
  .catch(failedAction => Observable.of(Actions.processError())); //  error handle action
```
Description: 
- `ofType(Actions.LOAD_ITEMS)` - listen only for LOAD_ITEMS action type. 
- `.mergeMap(() => fetchItems())` - trigger API call. 
- `.map(response => Actions.displayItems(response.data))`  - call displayItems action with fetched data
- `.catch(failedAction => Observable.of(Actions.processError()))` -  error handle action

#### Chain action example:
```javascript
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import Actions from '../actions/actions';

export default (action$, store) => action$
  .ofType(Actions.RESET_GAME)
  .concatMap(action => {
    return Observable.of(Actions.resetBoard(), push('/tic-tac-board'));
  });
```
Description: This epic triggers on action type Actions.RESET_GAME defined in the imported actions file.
Then it will trigger `Actions.resetBoard()` action and then action `push('/tic-tac-board')` (redirects to the other route).

**Note:** `push('/tic-tac-board')` is a [react-redux-router](https://github.com/reactjs/react-router-redux) action. It expects destination route as an argument.
Import for this action differs from other actions. It's always simply 
    
    import { push } from 'react-router-redux';


## Reducers directory
All files with reducer functions should be placed in this directory. 

State in this project is stored as 
[ImmutableJs](https://facebook.github.io/immutable-js/) structure. To access props you need to call `get` or `getIn`
and to set prop you need to call `set` or `setIn` see the [documentation](https://facebook.github.io/immutable-js/).

#### How to create a reducer:
0. If there is no semantically good reducer file, create one. For example `reducers/listReducer.js`.

    You should have reducers file named by purpose. For example having `listReducer.js` for reducers relating to display list of items and another one `calendarReducer.js` for stuff related to a calendar on another part of the page.
1. In your reducer file place your new reducer function. For example in `listReducer.js` place 
    
    ```javascript
    export function loadItems(state) {
      return state.set('loading', true);
    }
    ```
    
2. Import your reducer to `reducers/index.js` if it's not there yet. For example put `import * as listReducer from './listReducer';` 
in the beginning of the file.
3. Register what action type should be mapped to your new reducer function in the file `reducers/index.js`. 
Place it into the `reducerMapping` array:

    ```javascript
    const reducerMapping = {
      [Actions.LOAD_ITEMS]: listReducer.loadItems,
      ...
    ```

## Styles directory
This project uses **less** for styling. Any local module styles should be placed in this directory.

You can use [classNames](https://github.com/JedWatson/classnames) in your component. It's handy tool for conditional style composing and we highly recommend it. 
```html
<div className={classNames('col-xs-6', styles.listView)}>
```

Another classNames example: 
- `classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'`

#### How to add style in you component
1. Create your new style. For example: in `styles/listView.less` create style
    
    ```css
    .viewTitle {
      padding: 15px;
    }
    ```
    
2. Import it to your component. For example in the beginning of the file import `import styles from '../styles/listView.less';`
3. Then simply set the style with `styles` prefix.
    
    ```html
    <h2 className={styles.viewTitle}>My example list component</h2>
    ```

## Utils directory
This directory should contain `js` files with exportable functions and
selectors, which are too long or used multiple times. This helps keep components, reducers, and epics clean.

For example:
- `apiCalls.js`:

    ```javascript
    import axios from 'axios';
    import { GET_LIST } from '../constants/httpUrls';
    
    export const fetchItems = () => axios.get(GET_LIST);
    ```
- `commonSelectors.js`

    ```javascript
    import _ from 'lodash';
    
    export const getActiveUsers = (users) => _.filter(users, {active: true});
    
    export const sortByAge = (users) => _.sortBy(users, (user) => user.age);
    ````
