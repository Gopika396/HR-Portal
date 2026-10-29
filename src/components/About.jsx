import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/about.jpg';
import teamImg from '../assets/images/team.jpg';
import workspaceImg from '../assets/images/workspace.jpg';
import valueGrowth from '../assets/images/value-growth.jpg';
import teamCulture from '../assets/images/team-culture.jpg';
import featureSupport from '../assets/images/feature-support.jpg';

export default function About() {
  return (
    <main className="inner-page">
      <section className="page-banner has-image">
        <div className="container banner-split">
          <div>
            <p className="eyebrow">ABOUT WORKNEST</p>
            <h1>People are the heart of every great company.</h1>
            <p>We bring people, processes, and workplace goals together in one simple place.</p>
          </div>
          <img src={teamImg} alt="The WorkNest team" className="banner-img" />
        </div>
      </section>

      <section className="container section-block split-section">
        <div className="split-art" data-aos="fade-right">
          <img src={aboutImg} alt="Colleagues in a meeting" className="split-img" />
          <div className="art-caption">A clear path from first day to next step.</div>
        </div>
        <div className="split-copy" data-aos="fade-left">
          <p className="eyebrow">OUR STORY</p>
          <h2>A workplace should help people do their best work.</h2>
          <p>WorkNest gives HR teams a central space to organize employee information, support hiring, and keep communication clear. We focus on practical experiences that are easy to understand and easy to use.</p>
          <ul className="check-list">
            <li><i className="bi bi-check-circle-fill" /> People-first decisions</li>
            <li><i className="bi bi-check-circle-fill" /> Clear, dependable processes</li>
            <li><i className="bi bi-check-circle-fill" /> Room to learn and grow</li>
          </ul>
          <Link to="/contact" className="btn-main">Connect with us <i className="bi bi-arrow-up-right" /></Link>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">OUR VALUES</p><h2>Good systems. Better experiences.</h2></div>
          <div className="row g-3">
            <div className="col-md-4"><div className="value-card"><img src={featureSupport} alt="Clarity" className="value-img" /><span>01</span><h3>Clarity</h3><p>Make the next step easy to understand.</p></div></div>
            <div className="col-md-4"><div className="value-card"><img src={teamCulture} alt="Trust" className="value-img" /><span>02</span><h3>Trust</h3><p>Keep people informed and supported.</p></div></div>
            <div className="col-md-4"><div className="value-card"><img src={valueGrowth} alt="Growth" className="value-img" /><span>03</span><h3>Growth</h3><p>Make progress part of everyday work.</p></div></div>
          </div>
        </div>
      </section>

      <section className="container section-block workspace-section">
        <div className="section-heading"><p className="eyebrow">OUR WORKSPACE</p><h2>A space made for collaboration.</h2></div>
        <img src={workspaceImg} alt="Modern office workspace" className="workspace-img" data-aos="fade-up" />
      </section>
    </main>
  );
}