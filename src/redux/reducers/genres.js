import {
    GET_GENRES_LIST
} from '../actions/types';

const INIT_STATE = {
    results: []
};

function reducer (state = {...INIT_STATE}, { type, payload }) {
    switch (type) {
        case GET_GENRES_LIST:
            return { ...state, results: payload }
        default:
            return state;
    }
}

export default reducer;