import { HOME_GET_DATA, HOME_POST_LOGIN, HOME_POST_LOADING } from "../actions/types";

const initialState = {
    homeData: {},
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case HOME_GET_DATA:
            return {
                ...state,
                homeData: action.payload,
                loading: false
            };
        case HOME_POST_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
