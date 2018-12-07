import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
export default function App() {
    return (
        <div>
            Your SSR React Router Node App initialised with data client side!
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </div>
    );
}
