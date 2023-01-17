import React from 'react';
import { HiDownload } from 'react-icons/hi';
import aboutImage from '../../assets/header-portfolio.jpg';
import CV from '../../assets/CV-Belay-BirhanuGibina.pdf';
import Card from '../../components/Card';
import './about.css';
import data from './data';

const About = () => (
  <section id="about" className="about">
    <div className="container about-container">
      <div className="about-left">
        <div className="about-portrait">
          <img src={aboutImage} alt="my-profile" />
        </div>
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <div className="about-cards">
          {data.map((item) => (
            <Card key={item.id} className="about-card">
              <span className="about-card-icon">{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
          ))}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ab corporis eaque fugiat temporibus odit, saepe facilis dolor
          eum harum pariatur minima, provident molestias nobis sed asperioresipsum?
          Nostrum maxime nam perferendis quasi, pariatur porro laudantium,
          corrupti sunt facilis voluptatem temporibus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe voluptas placeat corrupti debitis. Libero dolorum quam
          beatae sint quisquam, atque consequuntur natus doloremque
          quas possimus consectetur labore dicta tempore harum animi
          perferendis. Hic, doloremque tempore at ea vero fuga ipsam iure,
          dolor similique maiores reprehenderit magnam possimus excepturi
          exercitationem sequi!
        </p>
        <a href={CV} download className="btn primary">
          Download CV
          {' '}
          <HiDownload />
        </a>
      </div>
    </div>
  </section>
);

export default About;
