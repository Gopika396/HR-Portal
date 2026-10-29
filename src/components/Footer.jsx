import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <Link className="brand brand-footer" to="/">
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" className="brand-logo" />
            <span className="brand-copy"><strong>WorkNest</strong><small>People • Process • Progress</small></span>
          </Link>
          <p>People-first tools for a more organized, connected workplace.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/careers">Careers</Link>
        </div>
        <div className="footer-links">
          <strong>Get in touch</strong>
          <Link to="/contact">Contact HR</Link>
          <a href="mailto:hello@worknest.example">hello@worknest.example</a>
          <span>Bengaluru, India</span>
        </div>
        <div className="footer-news">
          <strong>People matter. Every day.</strong>
          <p>Make the employee experience a little better, one step at a time.</p>
          <Link className="footer-link-cta" to="/contact">Let’s talk <i className="bi bi-arrow-up-right" /></Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 WorkNest. All rights reserved.</span>
        <span>Designed for people-first workplaces.</span>
      </div>
    </footer>
  );
}
