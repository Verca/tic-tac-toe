const reducerMapping = {
};

export default (state = 0, action) => {
  if (reducerMapping[action.type]) {
    return reducerMapping[action.type](state, action);
  }
  return state;
};
