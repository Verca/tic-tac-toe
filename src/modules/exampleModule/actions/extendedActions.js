import { fetchItems } from '../utils/apiCalls';
import Actions from './basicActions';

export const dummyExtended = () => (dispatch, getState) => {
  return fetchItems().then(() => {
    return dispatch(Actions.dummyA());
  });
};
