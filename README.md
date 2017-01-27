#  React/Redux boilerplate
This boilerplate is designed mainly for larger sites. The biggest advantage is robustness (protection against accidental overwrites) and code splitting (helps you keep files in reasonable length - no more hundreds of line caused by your reducer switch!).

## Developer documentation
- [Install/Run/Test application](doc/howToRun.md)
- [How-To module tutorial](doc/howToModuleGuide.md) - a startup guide. It will go through a module, using a simple example and explain how it works.
- [How to create your own module](doc/howToCreate.md) - in case you've already read the [How-To module tutorial](doc/howToModuleGuide.md) and you just want to create your own module.
- [Module documentation](doc/module.md) - Detailed module documentation.
- [redux-observable examples](doc/reduxObservableExamples.md) - It contains a list of most common use cases of epics. It should help you create your epics when you are developing your app.


## Highlights of this boilerplate
### Rendering speed
- It uses [ImmutableJS](https://facebook.github.io/immutable-js/) for representing the application state (see [module documentation](doc/module.md#reducers-directory)). This comes with useful things like:
  - **Nobody can change your state out of nowhere**. Only in reducers
  - It will make react **render faster!** ( anytime you place this [module.md#shouldcomponentupdate](doc/module.md#shouldcomponentupdate) to your component). 
    - because it will compare references instead of doing deep equals on structures

### Independence
It's **robust against accidental overwrites** and unexpected name collisions
  - All **actions are name-spaced**. This will avoid a collision when someone accidentally names action in the same way.
    - Reducers example: When two people in different modules name their action "LOAD_LIST", your reducers will ignore actions from another module (unless you specifically import them from action file of that module)
    - Epics have the same principal as reducers - you will listen only to imported actions.
  - Every reducer has its own part of the application state (nobody will rewrite your part of state unless they do so from your module).
  - State structure is strictly defined in the file `moduleState.js` in every module. In case anybody wants to add some other property, it needs to be defined in there.
  - Every module has it's own namespaced styles (no collisions). 

### Other
- Styles:
  - There is also a folder to place your global styles at this directory `assets` if you need them (aside from local module styles).  

