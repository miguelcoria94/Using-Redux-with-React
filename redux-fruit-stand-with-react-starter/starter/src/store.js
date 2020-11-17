
import { createStore } from 'redux';
import fruitReducer from './reducers/fruitReducers';

const store = createStore(fruitReducer);

export default store;