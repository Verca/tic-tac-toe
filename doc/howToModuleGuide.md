# Module tutorial

In this chapter, we will code a simple module together. This module will contain a button **Load items** and a list of items. Anytime we click on the button, new items will be loaded and concatenated to the displayed list.


## 0. Create a new module
As a first step, follow this guide and create a new tutorial module in our application:

- [How to create your own tutorial module](howToCreateTutorial.md)


## 1. Mock list at module's state
First, we mock data for our list. Note that any data should be always placed in our module's state. (We will clear this mock once we set-up loading of data.)

In file `./moduleState.js` place this on line 4 

```javascript
  items: new List(
    [
      { id: '007', name: 'one' },
      { id: '100', name: 'two' },
    ],
  ),
```

## 2. Add a list view to a component 
Open a file `components/ListView.jsx`. You will see a skeleton of the component. If you run the application now, all you would see at address http://localhost:8080/tutorial-module will be a text "Tutorial list component". Let's add a list to this! 

#### 1. Read list from  the application state

To access `items` from component we need to define them in the `connect` function. 
- on line 40 place this (into the returned object):

```javascript
  items: moduleState.get('items'),
```

`connect` function only defines which parts of the state can our component read. But to be able to access them we 
need to also define them as props of our component:

- To the line 9 (to the `propTypes` object) place this:

  ```javascript
    items: React.PropTypes.instanceOf(Immutable.List).isRequired,
  ```
  
Perfect! Now we can simply access it as `this.props.items` anywhere in our component. 

#### 2. Display the list
To display the list add this function to the line 21:
  ```javascript
    renderList() {
      return (
        <ul className="list-group">
          {this.props.items.map((item, index) => {
            return (<li className="list-group-item" key={index}>{item.get('name')}</li>);
          })}
        </ul>
      );
    }
  ```
Then add this to line 30 (inside of `<div className={classNames('col-xs-6', styles.listView)}>`):

  ```javascript
  {this.renderList()}
  ```

Done! Now if you go to http://localhost:8080/tutorial-module you should see our list displayed.

## 3. Add 'Load items button'
Now let's add a button which will trigger loading of more items into our list. 

When we click the button, we want to disable it until loading of new items is not done.

####1. Add loading variable to the state
In file `./moduleState.js` place this on line 8 (below the `items`) 

```javascript
  loading: false,
```

#### 2. Connect props to the component
Now open file `components/LoadButton.js`
- Add `loading` to the connect function. Insert this code to the line 41:

  ```javascript
      loading: moduleState.get('loading'),
  ```
- Define components props by adding this code to the line 13:

  ```javascript
    dispatch: React.PropTypes.func,
    loading: React.PropTypes.bool,
  ```
#### 3. Add button element to the component
- In `components/LoadButton.js` place this code to the render function at the line 34:

  ```html
    <button className={buttonStyles} disabled={this.props.loading} onClick={this.loadItems}>
      {this.props.loading ? 'Loading...' : 'Load more'}
    </button>
  ```
  - Button reads a prop value `loading`. When `loading` in the app state is `true`, button will be disabled and the label will change to the 'Loading...'. 
  - `onClick={this.loadItems}` specifies a function triggered when user clicks on the button.
  
  
- Now we add function, which will be triggered, when you click the button. Place this code at the line 20:

  ```javascript
    this.loadItems = () => {
      this.props.dispatch(Actions.loadItems());
    };
  ```
  Anytime user triggers this function, action 'load items' will be dispatched. 
  
## 4. Load items
When user clics to the button, we want to trigger action which will load more items to the list.
####1. Register `loadItems' action
To register action `loadItems` place this code to the `actions` object at the line 5 in the `actions/actions.js`

```javascript
    LOAD_ITEMS: 'loadItems',
```

Now anytime you need a action type, you will use `Actions.LOAD_ITEMS` and anytime you want to build a new action, you will call
`Actions.loadItems(payload)`.

####2. Set `loading` in reducers
After we dispatch any action it will always goes first through reducers and then it will enter `epics`. We will use the fact and first set up `loading` to `true` in reducer before we start loading data in epic.
- map action LOAD_ITEMS to the right reducer
  - open file `reducers/index.js` and import this in the beginning of the file:
  
    ```javascript
    import Actions from '../actions/actions';
    import * as listReducer from './listReducer';
    ```

  - add this code at the line 6 (inside of the `reducerMapping` array):
  
     ```javascript
      [Actions.LOAD_ITEMS]: listReducer.loadItems,
     ```
     
- We mapped action `Actions.LOAD_ITEMS` to the reducer function `loadItems` in the file `reducers/listReducer.js`. Since there is not such a file (with the function) yet, let's create it.
  - create file `reducers/listReducer.js`
  - into this file place this code:
  
      ```javascript
      export function loadItems(state) {
        return state.set('loading', true);
      }
      ```
  
`state.set('loading', true)` is assigning into immutablejs Map:

Application state is kept as [immutablejs](https://facebook.github.io/immutable-js/) structure. This improves rendering performance a lot. Anything you save to the state should be immutable (or primitive type). For more info you can read official documentation or for example this post [http://thomastuts.com/blog/immutable-js-101-maps-lists.html](http://thomastuts.com/blog/immutable-js-101-maps-lists.html)

####3. Trigger Api call for load more items
After action went through reducers, it will enter epics. Epics are from (redux-observables)[https://github.com/redux-observable/redux-observable] middleware (check original documentation and also our live examples in this documentation). Epics could be used for handling asynchronous code like API calls or action chaining (for more information read documentation for Module - epic section). 

- To load a data let's create an epic
 - First, create a file `epics/loadItems.js`
 - Into this file insert this code:
  ```javascript
  import { Observable } from 'rxjs';
  import Actions from '../actions/actions';
  import { fetchItems } from '../utils/apiCalls';
  
  export default action$ => action$
    .ofType(Actions.LOAD_ITEMS)
    .mergeMap(() => fetchItems())
    .map(response => Actions.displayItems(response.data));
  ```
  This code will listen for Action `Actions.LOAD_ITEMS`, then it will load items with `fetchItems()` and then trigger action `Actions.displayItems` with loaded data as a payload.
  - You can check a function `fetchItems` in the `utils/apiCalls.js` file. (also check Module's documentation to lear more what's useful to put into the `utils` folder, it will help you keep your code clean.

Perfect! Now when we click our button, it will trigger an api call to load more data (you can verify this by looking into netwok part of console in browser). You can't see data in view yet, because we haven't save them anywhere. Let's do it in the last step of this tutorial. 

## 4. Display loaded items
In `epics/loadItems.js` we define to trigger an action `Actions.displayItems` when data gets loaded. This action is however not defined in our module yet.

#### 1. Define action displayItems
Place this code to the `actions` object at the line 6 in file `actions/actions.js`:

```javascript
    DISPLAY_ITEMS: 'displayItems',
```

Now we can dispatch `Actions.displayItems`.

#### 2. Save loaded items to the state
When we dispatch the`displayItems` action from an epic, we also add a payload to it. Payload are data we attach to the action as a parameter of the function (in this case result from an Api call) - `Actions.displayItems(data)` . Now in reducer we will save this data to the application state. By saving data to the state we trigger automatic update of the component dislaying the list od data.

- First, we need to create a reducer function. Add this function into the `reducers/listReducer.js` file at line 5:

  ```javascript
    export function displayItems(state, action) {
      const loadedData = action.payload;
    
      return state.withMutations(mutableState => {
        mutableState.set('loading', false);
    
        const items = mutableState.get('items');
        mutableState.set('items', items.concat(loadedData));
      });
    }
  ```
  
  `displayItems` reducer function will take the payload (an api call result for items), merge it to the existing items of the state and cancel loading (button becomes enable again).
  
  **Note:** Notice that this part of reducer `state.withMutations(mutableState => {` uses `withMutations`. It's is handy function from ImmutableJS library. You can use it when you need to do more `set` to the state in one reducer action.

- Now we map the 'displayList' action to the new reducer function. Add this code at line 7 (inside of the `reducerMapping` array):

    ```javascript
        [Actions.DISPLAY_ITEMS]: listReducer.displayItems,
    ```

We are done! Now you can go and access ttp://localhost:8080/tutorial-module. Try to click on the button
