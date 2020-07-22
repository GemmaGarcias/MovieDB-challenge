import { createStore, combineReducers, applyMiddleware } from 'redux';
import categories from './reducers/categories';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    categories
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;