import moduleName from '../moduleName';
import transform from '../../../applicationSettings/buildActions';

const actions = {
  LOAD_ITEMS: 'loadItems',
  DISPLAY_ITEMS: 'displayItems',
};

export default transform(actions, moduleName);
