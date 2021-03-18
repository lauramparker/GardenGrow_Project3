import React from "react";
import { Link } from "react-router-dom"; //assuming links in header?
import "./style.css";

function Header() {
    return (
        <footer className="header">
            <h6>Header Stuff</h6>
            <Link
                to="/planner"
                className={window.location.pathname==="/" ? "nav-link active" : "nav-link"}>Planner 
            </Link>
        </footer>
    );
}

export default Header;