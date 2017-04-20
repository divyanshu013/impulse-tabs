import { combineReducers } from 'redux';

import todos from './todos';
import weather from './weather';

const rootReducer = combineReducers({
  todos,
  weather
});

export default rootReducer;
