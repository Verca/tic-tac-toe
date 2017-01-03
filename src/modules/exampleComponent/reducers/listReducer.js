import { fromJS } from 'immutable';

export function loadItems(state) {
  return state.set('loading', true);
}

export function displayItems(state, action) {
  const loadedData = action.payload;

  return state.withMutations(mutableState => {
    mutableState.set('loading', false);

    const items = mutableState.get('items');
    mutableState.set('items', items.concat(fromJS(loadedData)));
  });
}
