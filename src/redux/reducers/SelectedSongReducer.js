import { REPLACE_PLAYER } from "../actions";

const initialState = {
    content: [],
};

const SelectedSongReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPLACE_PLAYER:
            return {
                content: state.content.filter((el) => el._id !== action.payload),
                newContent: [...state.content, action.payload],
            };

        default:
            return state;
    }
};

export default SelectedSongReducer;