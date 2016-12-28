import _ from 'lodash';

export default (act, moduleName) => _.reduce(act, (mapa, action, key) => {
  mapa[action] = (payload) => {
    return {
      type: action,
      payload: payload,
      action: key,
      moduleName: moduleName
    }
  };
  return mapa;
}, {});
