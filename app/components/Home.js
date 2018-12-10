import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getHomeData } from "../actions/homeActions";
import { logoutUser } from "../actions/authActions";

class Home extends Component {
    static fetchData(store) {
        return store.dispatch(getHomeData());
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getHomeData();
    }

    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        const { loading } = this.props.home;

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

        const isLoading = <div>loading</div>;
        const isNotLoading = <div>loaded</div>;
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
                <div>{loading ? isLoading : isNotLoading}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    home: state.home
});
const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ logoutUser, getHomeData }, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
