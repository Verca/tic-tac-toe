const reducerMapping = {
  // place your code here
};

export default (state = 0, action) => {
  if (reducerMapping[action.type]) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
