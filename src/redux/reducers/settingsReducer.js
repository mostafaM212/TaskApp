import { GET_SETTINGS, SET_COLOR, SET_MUTE_NOTIFICATION, SET_SETTINGS } from "../actions/settingsActions";

const initialState = {

    settings: {
        muteNotification: false,
        color : "#0080ff"
    }
    
}
const cloros = ["#f28b82","#aecbfa","#0080ff","#ccff90"]

export const settingsReducer = (state = initialState, action) => {

    if (action.type === SET_SETTINGS) {
        return {
            ...state,
            settings :{
                ...action.settings
            }
        }
    }
    if (action.type === SET_MUTE_NOTIFICATION) {
        return {
            ...state,
            settings: {
                ...state.settings,
                muteNotification : action.muteNotification
            }
        }
    }
    if (action.type=== SET_COLOR) {
        return {
            ...state,
            settings: {
                ...state.settings,
                color : action.color
            }
        }
    }
    
    return state;
}