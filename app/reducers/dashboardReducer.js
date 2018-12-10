import { DASHBOARD_GET_DATA, DASHBOARD_POST_LOADING } from "../actions/types";

const initialState = {
    dashboardData: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DASHBOARD_GET_DATA:
            return {
                ...state,
                dashboardData: action.payload,
                loading: false
            };
        case DASHBOARD_POST_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
