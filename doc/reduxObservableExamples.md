## Api call and then trigger another action
```javascript
import Actions from '../actions/actions';
import { fetchItems } from '../utils/apiCalls';

export default action$ => action$
  .ofType(Actions.LOAD_ITEMS)
  .mergeMap(() => fetchItems())
  .map(response => Actions.processItems(response.data))
  .catch(failedAction => Observable.of(Actions.processAjaxErrors(failedAction)));
```

Description:   
- it listens for a action (`Actions.LOAD_ITEMS`)
- then calls an Api call. If you want action payload as parameter, 
simply do 
    ```
    .mergeMap((action) => fetchItems(action.payload))
    ```

    - if the Api call succeed, action `Actions.processItems(response.data)` will be called
    - in case the request failed, we catch it in `.catch` block and call `Actions.processAjaxErrors(failedAction)` action
   
## Api call and then no action
```javascript
import Actions from '../actions/actions';
import { saveTodo } from '../utils/apiCalls';

export default action$ => action$
  .ofType(Actions.ADD_TODO)
  .mergeMap(() => saveTodo())
  .ignoreElements();

```

Description:
 - listens for action
 - then trigger api call 
 - and then it finishes (we don't want to fire another action).

## Action chaining
```javascript
import { Observable } from 'rxjs';
import { push } from 'react-router-redux';
import Actions from '../actions/actions';

export default (action$, store) => action$
  .ofType(Actions.RESET_GAME)
  .concatMap(action => {
    return Observable.of(Actions.resetBoard(), push('/tic-tac-board'));
  });
```

Description: 
- it listens for an action type `Actions.RESET_GAME` defined in the imported actions file
- then it will trigger `Actions.resetBoard()` action 
- and then action `push('/tic-tac-board')` (redirects to the other route - this is react-router-redux action)
