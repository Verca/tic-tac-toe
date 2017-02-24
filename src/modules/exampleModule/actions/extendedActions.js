import { fetchItems } from '../utils/apiCalls';
import Actions from './actions';

export const dummyExtended = () => (dispatch, getState) => {
  return fetchItems().then(() => {
    return dispatch(Actions.dummyA());
  });
};
