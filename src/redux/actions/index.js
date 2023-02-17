export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'
export const GET_SONGS = 'GET_SONGS'
export const GET_SONGS_LOADING = 'GET_SONGS_LOADING'
export const GET_SONGS_ERROR = 'GET_SONGS_ERROR'
export const REPLACE_PLAYER = 'REPLACE_PLAYER'

export const addToFavoritesAction = (data) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: data,
    }
}

export const removeFromFavoritesAction = (i) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: i,
    }
}

export const replaceBottomAction = (data) => {
    return {
        type: REPLACE_PLAYER,
        payload: data
    }
}

export const getSongsActionAsync = (query) => {
    return async (dispatch, getState) => {

        const baseEndpoint =
            "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
        try {
            let resp = await fetch(baseEndpoint + query);
            if (resp.ok) {
                dispatch({
                    type: GET_SONGS_LOADING,
                    payload: true,
                })
                let { data } = await resp.json();
                dispatch({
                    type: GET_SONGS,
                    payload: data,
                })
                dispatch({
                    type: GET_SONGS_LOADING,
                    payload: false,
                })
            } else {
                dispatch({
                    type: GET_SONGS_LOADING,
                    payload: false,
                })
                dispatch({
                    type: GET_SONGS_ERROR,
                    payload: true,
                })
            }
        } catch (error) {
            dispatch({
                type: GET_SONGS_LOADING,
                payload: false,
            })
            dispatch({
                type: GET_SONGS_ERROR,
                payload: true,
            })
        }
    }
}