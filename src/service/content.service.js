import api from './index';

export const getGenresRequest = async () => {
    try {
        return await api.get('/genre/movie/list?api_key=c8ea50452858c6d36f5b07ba3a82823d&language=en-US');
    } catch (error) {
        return error;
    }
};

export const getMoviesByGenreRequest = async (id) => {
    try {
        return await api.get(`discover/movie?api_key=c8ea50452858c6d36f5b07ba3a82823d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`);
    } catch (error) {
        return error;
    }
};

