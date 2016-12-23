import { LOCATION_CHANGE } from 'react-router-redux';

export default (state = 0, action) => {
  console.info('ACTION ' + action.type + ' payload:', action.type);

  switch(action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload);

    default:
      return state;
  }
};
