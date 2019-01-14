import {createStore , combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import {filterReducer} from './filter';
import {droneReducer} from './drones';

const reducers = combineReducers({
  drones : droneReducer,  
  filter : filterReducer
});

export const store = createStore(
  reducers , {} , applyMiddleware(reduxThunk)
);