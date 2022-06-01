export const SET_IMAGE = 'SET_IMAGE';

export const setImage = image => dispatch => {
    
  dispatch({
    type: SET_IMAGE,
    image: image,
  });
};
