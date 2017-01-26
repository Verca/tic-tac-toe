#  React/Redux boilerplate

## Developer documentation
- [Install/Run/Test application](doc/howToRun.md)
- [How-To module tutorial](doc/howToModuleGuide.md) - a startup guide. It will go through a module, using simple example and explain how it works.
- [How to create your own module](doc/howToCreate.md) - in case you've already read the [How-To module tutorial](doc/howToModuleGuide.md) and you just want to create your own module.
- [Module documentation](doc/module.md) - Detailed module documentation.
- [redux-observable examples](doc/reduxObservableExamples.md) - It contains a list of most common use cases of epics. It should help you create your epics when you are developing your app.


## Couple of things you should know
- It uses [ImmutableJS](https://facebook.github.io/immutable-js/) for representing the application state (see [module documentation](doc/module.md#reducers-directory)). This comes with useful things like:
  - Nobody can change your state out of nowhere. Only in reducers
  - It will make react render faster! ( anytime you place this [module.md#shouldcomponentupdate](doc/module.md#shouldcomponentupdate) to your component). 
    - that's because then it will just compare references instead of doing deep equals on structures
- Except from module specific styles (which are name-spaced). There is also a folder to place your global styles at this directory `assets`.
- All actions are name-spaced. This will avoid collision when someone accidentally names action like you.  
- Every reducer has it's own part of the application state (nobody will rewrite your part of state unless they do so from your module).
