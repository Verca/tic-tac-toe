# Tic tac toe

## Install

To install, please execute this command:

`npm install`

## Run
To run this application, install it and then run these commands (in separate terminal windows):

`npm run build`

`webpack-dev-server`

Application runs on `localhost:8080`

In the case of trouble, try to run `npm install -g webpack-dev-server` and then try to run `npm run webpack` again.

## Reducers
Master reducer in `reducers/index.js` is deciding what reducer function should be applied. In this simple example, it calls only functions from `listReducer.js`


## Epics
This application uses `redux-observable` library (https://github.com/redux-observable/redux-observable). It uses epics for chaining actions and util functions in order to finish one move of the player. First, it places a mark on the board, then checks if the game finished and according to that it runs next action. See `epics/placeMarkEpic.js`. 

## Unit tests
You can check `reducers/listReducer.spec.js` to see an example of unit testing. Since this is only a demo application, I have not covered the whole application. But it is something that is in a TODO list.

To run tests, please execute this command:

`npm run test`
