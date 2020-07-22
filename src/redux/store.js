import { createStore, combineReducers, applyMiddleware } from 'redux';
import genres from './reducers/genres';
import movies from './reducers/movies';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    genres,
    movies
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;