import {
    FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE,
    ADD_TO_NEXT, CLEAR_TO_NEXT
} from '../constants'

const initialState = {
    next: '',
    data: [],
    dataFetched: false,
    isFetching: false,
    isNext: false,
    error: false
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            };

        case ADD_TO_NEXT:
            return {
                ...state,
                next: action.data,
                isNext: true
            };

        case CLEAR_TO_NEXT:
            return {
                ...state,
                isNext: false
            };


        default:
            return state
    }
}