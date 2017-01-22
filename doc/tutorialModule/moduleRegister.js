/* eslint object-shorthand: 0 */
import reducers from './reducers/index';
import moduleState from './moduleState';
import epics from './epics/index';
import moduleName from './moduleName';

// module structure
// don't modify this unless you know what you are doing
export default {
  name: moduleName,
  reducers: reducers,
  epics: epics,
  state: moduleState,
};
