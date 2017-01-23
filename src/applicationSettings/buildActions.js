import _ from 'lodash';

export default (act, moduleName) => _.reduce(act, (map, action, key) => {
  map[key] = `${moduleName}_${action}`;
  map[action] = (payload) => {
    return {
      type: `${moduleName}_${action}`,
      payload,
      action: key,
      moduleName,
    };
  };
  return map;
}, {});
