import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { Link } from "react-router-dom";
import TextFieldGroup from "./common/TextFieldGroup";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { email, password, errors } = this.state;

        return (
            <div className="login">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={this.onSubmit}>
                                <TextFieldGroup placeholder="Email Address" name="email" type="email" value={email} onChange={this.onChange} error={errors.email} />
                                <TextFieldGroup placeholder="Password" name="password" type="password" value={password} onChange={this.onChange} error={errors.password} />
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
const mapDispatchToProps = {
    loginUser
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);