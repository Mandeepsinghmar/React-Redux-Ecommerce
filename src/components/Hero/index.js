import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="item">
        <Link to="/">Buy Womens</Link>
      </div>
    </div>
  );
}

export default Hero;
