import { renderToString } from "react-dom/server";
import React from "react";
import path from "path";
import express from "express";
import renderFullPage from "./renderFullPage";
import routes from "../routes/routes";
import { StaticRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const app = express();
app.use(express.static(path.join(__dirname, "../")));

app.get("*", handleRender);

function handleRender(req, res) {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const promises = matchRoutes(routes, req.originalUrl).map(({ route }) => {
        return route.component.fetchData ? route.component.fetchData(store) : Promise.resolve(null);
    });

    return Promise.all(promises).then(data => {
        let context = {};
        const html = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.url}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );
        const serializedState = store.getState();

        res.status(200).send(renderFullPage(html, serializedState));
    });
}

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
