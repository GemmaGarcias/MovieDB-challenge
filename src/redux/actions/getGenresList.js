import {
    GET_GENRES_LIST
} from './types';
import { getGenresRequest } from '../../service/content.service';

export const getGenresList = text => {
    return async (dispatch) => {
        const response = await getGenresRequest();

        dispatch({
            type: GET_GENRES_LIST,
            payload: response.data.genres
        });
    }
};