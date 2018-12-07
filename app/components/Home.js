import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
            <div>You are on your home page</div>
        </div>
    );
}
