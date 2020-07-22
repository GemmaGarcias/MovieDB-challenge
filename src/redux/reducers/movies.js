import { 
    GET_MOVIES_BY_GENRE,
    GET_MOVIE_DETAIL
 } from "../actions/types";

const INIT_STATE = {
    results: []
};

function reducer (state = {...INIT_STATE}, { type, payload }) {
    switch (type) {
        case GET_MOVIES_BY_GENRE:
            return { ...state, results: payload }
        case GET_MOVIE_DETAIL:
            return { ...state, results: payload }
        default:
            return state;
    }
}

export default reducer;