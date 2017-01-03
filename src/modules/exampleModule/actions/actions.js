import moduleName from '../moduleName';
import transform from '../../../applicationSettings/buildActions';
import * as ActionTest from './actions';

export const LOAD_ITEMS = 'loadItems';
export const DISPLAY_ITEMS = 'displayItems';

export default transform(ActionTest, moduleName);
