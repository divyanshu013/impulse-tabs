import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';

import rootReducer from './reducers';

const store = createStore(rootReducer, loadState());
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;
