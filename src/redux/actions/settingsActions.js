export const SET_SETTINGS = 'SET_SETTINGS'
export const SET_MUTE_NOTIFICATION = 'SET_MUTE_NOTIFICATION'
export const SET_COLOR = 'SET_COLOR'




export const setMuteNotification = muteNotification => dispatch => {
    
    dispatch({
        type: SET_MUTE_NOTIFICATION,
        muteNotification 
    })
}


export const setSettings = settings => dispatch => {
    
    dispatch({
        type: SET_SETTINGS,
        settings 
    })
}


export const setColor = color => dispatch => {
    
    dispatch({
        type: SET_COLOR,
        color 
    })
}

