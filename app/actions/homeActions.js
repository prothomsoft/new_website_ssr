import axios from "axios";
import { HOME_GET_DATA, HOME_POST_LOADING } from "./types";
import { fetchHomeData } from "../services/fetchHomeData";

export const getHomeData = () => dispatch => {
    dispatch(setHomeLoading());
    axios
        .get("api/users/test")
        .then(res => {
            dispatch({
                type: HOME_GET_DATA,
                payload: res.data.msg
            });
        })
        .catch(err => {});
};

// Set loading state
export const setHomeLoading = () => {
    return {
        type: HOME_POST_LOADING
    };
};
