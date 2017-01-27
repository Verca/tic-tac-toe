import { Record } from 'immutable';

const ModuleState = Record({
  items: null, // List(),
  loading: false,
});

export default new ModuleState();
