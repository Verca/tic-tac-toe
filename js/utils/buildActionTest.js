import _ from 'lodash';

export default (act, moduleName) => _.reduce(act, (mapa, action, key) => {
  mapa[action] = (payload) => {
    return {
      type: action,
      payload,
      action: key,
      moduleName,
    };
  };
  return mapa;
}, {});
