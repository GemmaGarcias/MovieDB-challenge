import api from './index';

/**
 * Get API call to Edge
 *
 * @returns {Promise<*>}
 */
export const getCategoriesRequest = async (payload) => {
    try {
        return await api.get('/genre/movie/list?api_key=c8ea50452858c6d36f5b07ba3a82823d&language=en-US');
    } catch (error) {
        return error;
    }
};