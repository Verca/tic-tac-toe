export function loadItems(state) {
  return state.set('loading', true);
}

export function displayItems(state, action) {
  const loadedData = action.payload;

  return state.withMutations(mutableState => {
    mutableState.set('loading', false);

    const items = mutableState.get('items');
    const extendedItems = items ? items.concat(loadedData) : loadedData;
    mutableState.set('items', extendedItems);
  });
}

export const addSomething = (state, action) => {
  return state.set('test', 1);
};
