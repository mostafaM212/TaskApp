import { SET_IMAGE } from "../actions/imageActions";

const initialState = {
    image : {}
};


export const imageReducer = (state = initialState , action) => {
    
    if (action.type === SET_IMAGE) {
        return {
            ...state,
            image : action.image
        }
    }

    return state;
}


