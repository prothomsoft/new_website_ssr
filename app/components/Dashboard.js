import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    constructor() {
        super();
    }

    componentDidMount() {}

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div>
                <div>authenticated</div>
                <a href="" onClick={this.onLogoutClick.bind(this)}>
                    {" "}
                    Logout
                </a>
            </div>
        );
        const guestLinks = (
            <div>
                <div>guest</div>
            </div>
        );

        return (
            <div>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>Authentication status:</div>
                <div>{isAuthenticated ? authLinks : guestLinks}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
const mapDispatchToProps = {
    logoutUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
