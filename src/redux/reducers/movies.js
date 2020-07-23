import { 
    GET_MOVIES_BY_GENRE,
    GET_MOVIE_DETAIL
 } from "../actions/types";

const INIT_STATE = {
    data: {},
    detailResults: {}
};

function reducer (state = {...INIT_STATE}, { type, payload }) {
    switch (type) {
        case GET_MOVIES_BY_GENRE:
            return { ...state, data: payload }
        case GET_MOVIE_DETAIL:
            return { ...state, detailResults: payload }
        default:
            return state;
    }
}

export default reducer;