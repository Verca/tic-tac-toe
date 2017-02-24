import { Record } from 'immutable';

const ModuleState = Record({
  items: null, // List(),
  loading: false,
  test: 0,
});

export default new ModuleState();
