import { createStore, combineReducers, applyMiddleware } from 'redux';
import genres from './reducers/genres';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    genres
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;