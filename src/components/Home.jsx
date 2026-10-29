import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.jpg';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import featureEmployees from '../assets/images/feature-employees.jpg';
import featurePartners from '../assets/images/feature-partners.jpg';
import featureSatisfaction from '../assets/images/feature-satisfaction.jpg';
import featureSupport from '../assets/images/feature-support.jpg';
import teamCulture from '../assets/images/team-culture.jpg';

const services = [
  { img: service1, title: 'Recruitment & Onboarding', text: 'Find and onboard great talent with a seamless, welcoming process.' },
  { img: service2, title: 'Employee Management', text: 'Manage employee records, attendance, and performance in one place.' },
  { img: service3, title: 'Learning & Development', text: 'Provide training and growth opportunities for every team member.' }
];

const features = [
  { img: featureEmployees, title: 'Happy Employees', text: 'Over 500 people supported every day.' },
  { img: featurePartners, title: 'Partner Companies', text: '120+ companies trust WorkNest.' },
  { img: featureSatisfaction, title: 'Satisfaction', text: '98% employee satisfaction score.' },
  { img: featureSupport, title: 'Dedicated Support', text: 'A friendly HR team ready to help.' }
];

export default function Home() {
  return (
    <main>
      <section className="hero-wrap">
        <div className="container hero-grid">
          <div className="hero-copy" data-aos="fade-up">
            <p className="eyebrow">WELCOME TO WORKNEST</p>
            <h1>Empowering People,<br /><span>Building Futures.</span></h1>
            <p className="hero-description">A complete HR portal to manage employees, streamline processes, and create a better workplace.</p>
            <div className="hero-actions">
              <Link className="btn-main" to="/services">Get Started <i className="bi bi-arrow-up-right" /></Link>
              <Link className="btn-quiet" to="/careers">Explore Careers</Link>
            </div>
            <div className="hero-proof">
              <div><strong>500+</strong><span>Happy Employees</span></div>
              <div><strong>120+</strong><span>Partner Companies</span></div>
              <div><strong>98%</strong><span>Employee Satisfaction</span></div>
            </div>
          </div>
          <div className="hero-art" data-aos="fade-left">
            <div className="team-visual hero-photo-wrap">
              <img src={heroImg} alt="HR team working together" className="hero-photo" />
              <div className="floating-note note-top"><i className="bi bi-check-circle-fill" /> People first</div>
              <div className="floating-note note-bottom"><i className="bi bi-graph-up-arrow" /> Growing together</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block services-preview">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <p className="eyebrow">WHAT WE DO</p><h2>Our HR Services</h2>
            <p>Everything you need to manage your workforce efficiently.</p>
          </div>
          <div className="row g-4 mt-2">
            {services.map((service, index) => (
              <div className="col-md-4" key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                <article className="service-card">
                  <img src={service.img} alt={service.title} className="service-thumb" />
                  <h3>{service.title}</h3><p>{service.text}</p>
                  <Link to="/services" className="text-link">Explore service <i className="bi bi-arrow-right" /></Link>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <p className="eyebrow">WHY WORKNEST</p><h2>Trusted by people and teams.</h2>
          </div>
          <div className="row g-3">
            {features.map((item, index) => (
              <div className="col-6 col-lg-3" key={item.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <article className="feature-card">
                  <img src={item.img} alt={item.title} className="feature-img" />
                  <div className="feature-body"><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="culture-banner" style={{ backgroundImage: `url(${teamCulture})` }}>
        <div className="culture-overlay">
          <div className="container">
            <p className="eyebrow eyebrow-light">OUR CULTURE</p>
            <h2>Great workplaces are built together.</h2>
            <Link className="btn-main" to="/about">Learn about us <i className="bi bi-arrow-up-right" /></Link>
          </div>
        </div>
      </section>

      <section className="cta-strip"><div className="container cta-inner">
        <div><p className="eyebrow">LET’S BUILD A BETTER WORKPLACE</p><h2>Make people your strongest advantage.</h2></div>
        <Link className="btn-main" to="/contact">Talk to our team <i className="bi bi-arrow-up-right" /></Link>
      </div></section>
    </main>
  );
}