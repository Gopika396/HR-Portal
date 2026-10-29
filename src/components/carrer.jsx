import React from 'react';
import { Link } from 'react-router-dom';
import careersImg from '../assets/images/careers.jpg';
import hiringImg from '../assets/images/hiring.jpg';
import teamCulture from '../assets/images/team-culture.jpg';
import workspaceImg from '../assets/images/workspace.jpg';

const jobs = [
  { type: 'PEOPLE & CULTURE', title: 'People Operations Associate', place: 'Bengaluru · Hybrid', level: 'Entry level' },
  { type: 'TECHNOLOGY', title: 'HR Systems Analyst', place: 'Bengaluru · Hybrid', level: '1–3 years' },
  { type: 'TALENT', title: 'Talent Acquisition Partner', place: 'Remote · India', level: 'Mid level' }
];

export default function Career() {
  return (
    <main className="inner-page">
      <section className="page-banner has-image"><div className="container banner-split">
        <div>
          <p className="eyebrow">CAREERS AT WORKNEST</p><h1>Build a workplace worth belonging to.</h1>
          <p>Bring your curiosity, care, and ideas. Help us make work better for everyone.</p>
        </div>
        <img src={hiringImg} alt="We are hiring" className="banner-img" />
      </div></section>

      <section className="container section-block careers-intro">
        <div><p className="eyebrow">YOUR NEXT CHAPTER</p><h2>Do meaningful work with kind people.</h2>
          <p>We value thoughtful problem-solvers, open communication, and a willingness to keep learning. Explore these sample roles.</p>
        </div>
        <div className="careers-side">
          <img src={careersImg} alt="Team member at WorkNest" className="careers-img" />
          <div className="careers-highlight"><i className="bi bi-heart" /><strong>People first, always.</strong><span>Flexible work · Learning budget · Supportive team</span></div>
        </div>
      </section>

      <section className="container openings-section">
        <div className="section-heading"><p className="eyebrow">OPEN POSITIONS</p><h2>Find your place.</h2></div>
        {jobs.map(job => (
          <article className="job-card" key={job.title}>
            <div className="job-icon"><i className="bi bi-briefcase" /></div>
            <div className="job-info"><span className="job-type">{job.type}</span><h3>{job.title}</h3><p><i className="bi bi-geo-alt" /> {job.place} · {job.level}</p></div>
            <Link className="btn-quiet" to="/contact">Apply <i className="bi bi-arrow-up-right" /></Link>
          </article>
        ))}
      </section>

      <section className="container life-section">
        <div className="section-heading"><p className="eyebrow">LIFE AT WORKNEST</p><h2>Work that feels like teamwork.</h2></div>
        <div className="row g-3">
          <div className="col-md-6"><img src={teamCulture} alt="Team celebrating together" className="life-img" /></div>
          <div className="col-md-6"><img src={workspaceImg} alt="Our office" className="life-img" /></div>
        </div>
      </section>
    </main>
  );
}