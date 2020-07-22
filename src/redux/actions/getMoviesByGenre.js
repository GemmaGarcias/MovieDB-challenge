import {
    GET_MOVIES_BY_GENRE
} from './types';
import { getMoviesByGenreRequest } from '../../service/content.service';

export const getMoviesByGenre = id => {
    return async (dispatch) => {
        const response = await getMoviesByGenreRequest(id);

        dispatch({
            type: GET_MOVIES_BY_GENRE,
            payload: response.data.results
        });
    }
};