I want to listen for action, then trigger api call and then finish (not to fire another action).

```javascript
import { ADD_TODO } from '../actions/actions';
import { saveTodo } from '../utils/apiCalls';

// This epic handles LOAD_ITEMS action: calls
// ajax get request and processes data or errors
export default action$ => action$
  .ofType(ADD_TODO)
  .mergeMap(() => saveTodo())
  .ignoreElements();

```