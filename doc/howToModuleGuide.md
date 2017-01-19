#Module tutorial

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

##2. Add a list view to a component 
Open a file `components/ListView.jsx`. You will see a skeleton of the component. If you run the application now, all you would see at address `http://localhost:8080/tutorial-module` will be a text "Tutorial list component". Let's add a list to this! 

####1. Read list from  the application state

To access `items` from component we need to define them in the `connect` function. 
- uncomment part on lines 36 to 41. Then to the return function place this

```javascript
  return {
    items: moduleState.get('items'),
  }
```

`connect` function only defines which parts of the state can our component read. But to be able to access them we 
need to also define them as props of our component:

- To the line 9 (to the `propTypes` object) place this:

  ```javascript
    items: React.PropTypes.instanceOf(Immutable.List).isRequired,
  ```
  
Perfect! Now we can simply access it as `this.props.items` anywhere in our component. 

####2. Display the list
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

Done! Now if you go to http://localhost:8080/tutorial-module you shoul see our list displayed.

## 3. Add 'Load items button'
Now let's add a button which will trigger loading of more items into our list. 
