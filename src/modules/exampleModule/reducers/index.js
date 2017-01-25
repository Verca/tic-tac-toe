import * as listReducer from './listReducer';
import Actions from '../actions/actions';

const reducerMapping = {
  [Actions.LOAD_ITEMS]: listReducer.loadItems,
  [Actions.DISPLAY_ITEMS]: listReducer.displayItems,
};

export default (state = 0, action) => {
  if (reducerMapping[action.type]) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
