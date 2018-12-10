import App from "../components/App";
import Home from "../components/Home";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import { getDashboardData } from "../actions/authActions";

const routes = [
    {
        component: App,
        routes: [{ path: "/", exact: true, component: Home }, { path: "/dashboard", exact: true, component: Dashboard }, { path: "/login", component: Login }]
    }
];

export default routes;
