import { combineReducers } from 'redux';
import counter from '@/store/storeModules/counter';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
