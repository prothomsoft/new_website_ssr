import { SET_CURRENT_USER } from "./types";

export const loginUser = userData => dispatch => {
    dispatch(setCurrentUser(userData.email));
};

export const logoutUser = () => dispatch => {
    dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
