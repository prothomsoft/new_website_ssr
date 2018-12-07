import { renderToString } from "react-dom/server";
import React from "react";
import path from "path";
import express from "express";
import cors from "cors";
import renderFullPage from "./renderFullPage";
import routes from "../routes/routes";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import rootReducer from "../reducers";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { fetchCounter } from "../services/counter";
import qs from "qs";

const port = process.env.PORT || 5000;
const app = express();
const assets = express.static(path.join(__dirname, "../"));

app.use(cors());
app.use(assets);

app.get("*", handleRender);

function handleRender(req, res) {
    fetchCounter(apiResult => {
        const params = qs.parse(req.query);
        let preloadedState = { auth: { isAuthenticated: true, user: "domel" } };
        const store = createStore(rootReducer, preloadedState);
        const context = {};
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.url}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );
        const finalState = store.getState();
        res.status(200).send(renderFullPage(html, finalState));
    });
}

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
