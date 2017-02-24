import transform from 'applicationSettings/buildActions';
import moduleName from '../moduleName';

const actions = {
  LOAD_ITEMS: 'loadItems',
  DISPLAY_ITEMS: 'displayItems',
  DUMMY_A: 'dummyA',
};

export default transform(actions, moduleName);
