import {
    GET_CATEGORIES
} from './types';

export const getCategories = text => {
    return {
        type: GET_CATEGORIES,
        payload: text
    };
};