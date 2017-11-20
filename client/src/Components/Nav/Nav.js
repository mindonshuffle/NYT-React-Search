import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand mb-0" href="/">New York Times Article Search</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/">Search Archives</Link>
      <Link className="nav-item nav-link" to="/saved">Saved Articles</Link>
    </div>
  </div>
</nav>);

export default Nav;