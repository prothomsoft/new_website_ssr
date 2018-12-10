import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes.js";
import { renderRoutes } from "react-router-config";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const serializedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(rootReducer, serializedState, composeWithDevTools(applyMiddleware(thunk)));

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
