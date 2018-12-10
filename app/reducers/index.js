import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import dashboardReducer from "./dashboardReducer";
import homeReducer from "./homeReducer";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    dashboard: dashboardReducer,
    home: homeReducer
});
