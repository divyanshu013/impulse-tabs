import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';

import rootReducer from './reducers';

const store = createStore(rootReducer, loadState());
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
