import React from 'react';
import Card from '../../components/Card';
import servicesData from './servicesData';
import './services.css';

const Services = () => (
  <section id="services">
    <h2>My Services</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, architecto!</p>
    <div className="container services-container">
      {
        servicesData.map((item) => (
          <Card key={item.id} className="service light">
            <div className="service-icon">{item.icon}</div>
            <div className="service-details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))
      }
    </div>
  </section>
);

export default Services;
