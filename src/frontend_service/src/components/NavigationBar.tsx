import React from "react";
import { Link } from "react-router";

const NavigationBar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
};

export default NavigationBar;