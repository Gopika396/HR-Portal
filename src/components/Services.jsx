import React from 'react';
import { Link } from 'react-router-dom';
import servicesBanner from '../assets/images/services.jpg';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import service4 from '../assets/images/service-4.jpg';
import service5 from '../assets/images/service-5.jpg';
import service6 from '../assets/images/service-6.jpg';

const services = [
  { img: service1, title: 'Recruitment & Onboarding', text: 'Plan hiring steps, coordinate interviews, and help new hires feel ready from day one.' },
  { img: service2, title: 'Employee Management', text: 'Keep profiles, policies, attendance details, and employee records easy to find.' },
  { img: service3, title: 'Learning & Development', text: 'Support training plans, skill-building, and meaningful career conversations.' },
  { img: service4, title: 'Attendance & Leave', text: 'Make time-off requests and attendance workflows more transparent.' },
  { img: service5, title: 'Performance Support', text: 'Create regular check-ins and keep goals visible across the team.' },
  { img: service6, title: 'Employee Engagement', text: 'Listen to feedback and build a more connected workplace.' }
];

export default function Services() {
  return (
    <main className="inner-page">
      <section className="page-banner has-image"><div className="container banner-split">
        <div>
          <p className="eyebrow">OUR SERVICES</p><h1>Everything your people team needs.</h1>
          <p>Flexible HR support designed to make daily work simpler.</p>
        </div>
        <img src={servicesBanner} alt="HR services" className="banner-img" />
      </div></section>
      <section className="container section-block"><div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={service.title} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
            <article className="service-card service-card-large">
              <img src={service.img} alt={service.title} className="service-thumb" />
              <h3>{service.title}</h3><p>{service.text}</p><span className="service-number">0{index + 1}</span>
            </article>
          </div>
        ))}
      </div></section>
      <section className="cta-strip"><div className="container cta-inner">
        <div><p className="eyebrow">NEED A HAND?</p><h2>Let’s find the right HR solution.</h2></div>
        <Link className="btn-main" to="/contact">Contact HR <i className="bi bi-arrow-up-right" /></Link>
      </div></section>
    </main>
  );
}