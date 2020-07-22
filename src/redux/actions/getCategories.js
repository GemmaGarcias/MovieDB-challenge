import {
    GET_CATEGORIES
} from './types';
import { getCategoriesRequest } from '../../service/content.service';

export const getCategories = text => {
    return async (dispatch) => {
        const response = await getCategoriesRequest();
        
        dispatch({
            type: GET_CATEGORIES,
            payload: response
        });
    }
};