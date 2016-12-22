import { LOCATION_CHANGE } from 'react-router-redux';

export default (state = 0, action) => {
  console.info('app reducer', action);
  console.info('app reducerJS', state);

  switch(action.type) {
    case LOCATION_CHANGE:
      console.info('location change!', action);
      return state.set('locationBeforeTransitions', action.payload);

    default:
      console.info('default', state);
      return state;
  }
};

// (state = 0, action) => {
//   console.info('app reducer action', action.type);
//   console.info('app reducerJS', state);
//
//   switch(action.type) {
//     case LOCATION_CHANGE:
//       console.info('location change!', state);
//       return state.set('locationBeforeTransitions', action.payload);
//
//     default:
//       return state;
//   }
// };