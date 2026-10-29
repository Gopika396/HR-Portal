import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="brand" to="/">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="WorkNest logo" className="brand-logo" />
            <span className="brand-copy">
              <strong>WorkNest</strong>
              <small>People • Process • Progress</small>
            </span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <NavLink className="nav-link" to="/" end>Home</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/services">Services</NavLink>
              <NavLink className="nav-link" to="/careers">Careers</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              <Link className="nav-cta" to="/contact">Login <i className="bi bi-arrow-up-right" /></Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
