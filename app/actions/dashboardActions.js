import axios from "axios";
import { DASHBOARD_GET_DATA, DASHBOARD_POST_LOADING } from "./types";
import { fetchDashboardData } from "../services/fetchDashboardData";

export const getDashboardData = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get("api/dashboars/test")
        .then(res => {
            dispatch({
                type: DASHBOARD_GET_DATA,
                payload: res.data.msg
            });
        })
        .catch(err => {});
};

export const setPostLoading = () => {
    return {
        type: DASHBOARD_POST_LOADING
    };
};
