import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import localStorage from 'redux-persist/lib/storage'
import SearchReducer from "../reducers/SearchReducer";
import FavoritesReducer from "../reducers/FavoritesReducer";
import SelectedSongReducer from "../reducers/SelectedSongReducer";

const persistConfig = {
    storage: localStorage,
    key: 'root', // this brings the whole redux store into persistency
    transforms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY
        }),
    ],
}

const combinedReducer = combineReducers({
    search: SearchReducer,
    favorites: FavoritesReducer,
    selected: SelectedSongReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
})

const persistedStore = persistStore(store)

export { store, persistedStore }