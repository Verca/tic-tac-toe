import moduleName from '../moduleName';

const reducerMapping = {
  // place your code here
};

export default (state = 0, action) => {
  if (reducerMapping[action.type] && action.moduleName === moduleName) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
