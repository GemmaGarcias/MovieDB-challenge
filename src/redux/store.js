import { createStore, combineReducers } from 'redux';
import categories from './reducers/categories';

const reducer = combineReducers({
    categories
});

const store = createStore(reducer);

export default store;