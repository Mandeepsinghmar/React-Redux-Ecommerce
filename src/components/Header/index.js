import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            {" "}
            <h2>Homey trend</h2>
          </Link>
        </div>
        <div className="links">
          {/* <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Search</Link>
              </li>
            </ul>
          </nav> */}
          <div className="auth">
            <ul className="auth-links">
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
