import _ from 'lodash';

export default (act) => _.reduce(act, (mapa, action, key) => {
  mapa[action] = (payload) => {
    return {
      type: action,
      payload: payload,
      action: key,
    }
  };
  return mapa;
}, {});
