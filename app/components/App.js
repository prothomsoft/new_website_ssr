import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "../components/common/PrivateRoute";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Landing from "../components/layout/Landing";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import CreateProfile from "../components/create-profile/CreateProfile";
import EditProfile from "../components/edit-profile/EditProfile";
import AddExperience from "../components/add-credentials/AddExperience";
import AddEducation from "../components/add-credentials/AddEducation";
import Profiles from "../components/profiles/Profiles";
import Profile from "../components/profile/Profile";
import NotFound from "../components/not-found/NotFound";
import Posts from "../components/posts/Posts";
import Post from "../components/post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    font-size: 12px;
`;

export default function App() {
    return (
        <AppContainer>
            <Navbar />
            <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
                <PrivateRoute exact path="/add-education" component={AddEducation} />
                <PrivateRoute exact path="/feed" component={Posts} />
                <PrivateRoute exact path="/post/:id" component={Post} />
                <Route path="/" exact component={Landing} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:handle" component={Profile} />
                <Route exact component={NotFound} />
            </Switch>
            <Footer />
        </AppContainer>
    );
}
