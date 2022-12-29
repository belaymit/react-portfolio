import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="portfolio" className="portfolio">
    <h5>What Skills I Have</h5>
    <h2>My experience</h2>
    <div className="container portfolio-container">
      <div className="experience-frontend">
        <h3>Frontend Development</h3>
        <div className="experience-content">
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience-frontend">
        <h3>Backend Development</h3>
        <div className="experience-content">
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Node JS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>MongoDb</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience-details">
            <BsPatchCheckFill />
            <div>
              <h4>Django</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
