import _ from 'lodash';
import MODULES from './modulesRegister';

// validity check
MODULES.forEach(module => {
  if (!module.name) {
    throw new Error('Every module must have a name registered in moduleRegister.js file. Please fix this module: ' + JSON.stringify(module, null, 4))
  }
  if (!module.state) {
    throw new Error('Every module must have a state registered in moduleRegister.js file. Please fix this module: ' + JSON.stringify(module, null, 4))
  }
  if (!module.reducers) {
    throw new Error('Every module must have reducers registered in moduleRegister.js file. Please fix this module: ' + JSON.stringify(module, null, 4))
  }
});

export const initialState = _.reduce(MODULES, (state, module) => {
  state[module.name] = module.state;
  return state;
}, {});

export const epicsRoot = _.reduce(MODULES, (epics, module) => {
  if (!module.epics || !module.epics.length === 0) return epics;
  epics.push(module.epics);
  return epics;
}, []);

export const reducersRoot = _.reduce(MODULES, (reducers, module) => {
  reducers[module.name] = module.reducers;
  return reducers;
}, {});
