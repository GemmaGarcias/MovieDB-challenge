import {
    GET_MOVIES_BY_GENRE,
    GET_MOVIE_DETAIL
} from './types';
import { getMoviesByGenreRequest, getMovieDetailRequest } from '../../service/content.service';

export const getMoviesByGenre = (id, page) => {
    return async (dispatch) => {
        const response = await getMoviesByGenreRequest(id, page);
        
        dispatch({
            type: GET_MOVIES_BY_GENRE,
            payload: response.data
        });
    }
};

export const getMovieDetail = id => {
    return async (dispatch) => {
        const response = await getMovieDetailRequest(id);
        
        dispatch({
            type: GET_MOVIE_DETAIL,
            payload: response.data
        });
    }
};