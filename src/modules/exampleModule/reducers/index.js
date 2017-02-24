import * as listReducer from './listReducer';
import Actions from '../actions/actions';

const reducerMapping = {
  [Actions.LOAD_ITEMS]: listReducer.loadItems,
  [Actions.DISPLAY_ITEMS]: listReducer.displayItems,
  [Actions.DUMMY_A]: listReducer.addSomething,
};

export default (state = 0, action) => {
  if (reducerMapping[action.type]) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
