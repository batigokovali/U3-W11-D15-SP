import { GET_SONGS, GET_SONGS_ERROR, GET_SONGS_LOADING } from "../actions";

const initialState = {
    stock: [],
    isLoading: false,
    isError: false,
}

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SONGS:
            return {
                ...state,
                stock: action.payload,
            }

        case GET_SONGS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }

        case GET_SONGS_ERROR:
            return {
                ...state,
                isError: action.payload,
            }
        default:
            return state
    }
}

export default SearchReducer