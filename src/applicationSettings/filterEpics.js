/* eslint no-shadow:0, no-unused-vars:0, max-len:0 */
import _ from 'lodash';

export default (epics, moduleName) => {
  return _.map(epics, epic => {
    return (action$, store) =>
      action$
        .filter((action$, store) => { return action$.moduleName === moduleName; })
        .let(epic);
  });
};
