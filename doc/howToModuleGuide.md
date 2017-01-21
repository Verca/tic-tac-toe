# Module tutorial

In this chapter, we will create a simple module together.  This module will contain a button **Load items** and a list of items. Anytime we click on the button, new items will be loaded and concatenated to the displayed list.

## 1. Mock list at module's state
First, we mock data for our list. Note that any data should be always placed in our module's state. (We will clear this mock once we set-up loading of data.)

In file `./moduleState.js` place this on line 4 

```javascript
  items: [
    { id: '007', name: 'one' },
    { id: '100', name: 'two' },
  ],
```

## 2. Add a list view to a component 
Open a file `components/ListView.jsx`. You will see a skeleton of the component. If you run the application now, all you would see at address `http://localhost:8080/tutorial-module` will be a text "Tutorial list component". Let's add a list to this! 

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
###1. Register `loadItems' action
To register action `loadItems` place this code to the line 5 in the `actions/actions.js`

```javascript
  export const LOAD_ITEMS = 'loadItems';
```

###2. Set `loading` to `true` in reducers
After we dispatch any action it will always goes first through reducers and then it will enter `epics`. We will use the fact and first set up `loading` to `true` in reducer before we start loading data in epic.
####1. map action LOAD_ITEMS to the right reducer
  - open file `reducers/index.js` and import this in the beginning of the file:
  
  ```javascript
    import * as Actions from '../actions/actions';
  ```
