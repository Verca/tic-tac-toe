// import * as Actions from '../actions/actions';
import moduleName from '../moduleName';

const reducerMapping = {
};

export default (state = 0, action) => {
  if (reducerMapping[action.type] && action.moduleName === moduleName) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
