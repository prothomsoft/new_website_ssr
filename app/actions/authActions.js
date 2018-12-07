import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Login - Get User Token:
export const loginUser = userData => dispatch => {
    dispatch(setCurrentUser(userData.email));

    /*
    // Error handling for login form
    dispatch({
        type: GET_ERRORS,
        payload: { email: "Mail field is wrong", password: "Password field is wrong" }
    });*/
};

// Log user out:
export const logoutUser = () => dispatch => {
    // Set current user to {} which will set isAuthenticated to false:
    dispatch(setCurrentUser({}));
};

// Set logged in user:
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
