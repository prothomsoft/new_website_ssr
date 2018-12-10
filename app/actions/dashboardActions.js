import { DASHBOARD_GET_DATA, DASHBOARD_POST_LOADING } from "./types";
import { fetchDashboardData } from "../services/fetchDashboardData";

export const getDashboardData = () => dispatch => {
    dispatch(setPostLoading());
    return fetchDashboardData().then(result => {
        dispatch({
            type: DASHBOARD_GET_DATA,
            payload: result
        });
    });
};

export const setPostLoading = () => {
    return {
        type: DASHBOARD_POST_LOADING
    };
};
