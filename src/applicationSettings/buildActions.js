import { fromJS } from 'immutable';
import _ from 'lodash';

export default (act, moduleName) => _.reduce(act, (map, action, key) => {
  map[key] = `${moduleName}_${action}`;
  map[action] = (payload) => {
    return {
      type: `${moduleName}_${action}`,
      payload: fromJS(payload), // make immutable
      action: key,
      moduleName,
    };
  };
  return map;
}, {});
