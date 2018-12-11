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

import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import users from "../routes/api/users";
import posts from "../routes/api/posts";

const app = express();
const router = express.Router();

// Body Parser Middleware:
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../")));

// Connect To MongoDB:
mongoose.connect(
    "mongodb://localhost/DevSpace",
    { useNewUrlParser: true },
    function(err) {
        if (err) {
            console.log("Error: Mongo Wasnt Connected because of: ", err);
        } else {
            console.log("MongoDB Connected");
        }
    }
);

router.use(users);
router.use(posts);

router.get("*", handleRender);

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

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port);
console.log(`Listening at http://localhost:${port}`);
