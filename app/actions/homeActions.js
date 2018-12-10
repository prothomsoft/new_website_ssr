import { HOME_GET_DATA, HOME_POST_LOADING } from "./types";
import { fetchHomeData } from "../services/fetchHomeData";

export const getHomeData = () => dispatch => {
    dispatch(setHomeLoading());
    return fetchHomeData().then(result => {
        dispatch({
            type: HOME_GET_DATA,
            payload: result
        });
    });
};

// Set loading state
export const setHomeLoading = () => {
    return {
        type: HOME_POST_LOADING
    };
};
