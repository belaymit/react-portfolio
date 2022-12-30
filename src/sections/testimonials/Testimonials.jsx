import React from 'react';
import testimonialData from './testimonialsData';
import './testimonials.css';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <h5 className="review-title">Review from Reviewers</h5>
    <h2>Testimonials</h2>
    <div className="container testimonial-container">
      {
        testimonialData.map(({
          avatar, name, organization, review,
        }, index) => (
          // eslint-disable-next-line react/jsx-key, react/no-array-index-key
          <article className="testimonial" key={index}>
            <div className="reviewer-avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="reviewer-name">{name}</h5>
            <span>{organization}</span>
            <small className="reviewer-review">
              {review}
            </small>
          </article>
        ))
      }
    </div>
  </section>
);

export default Testimonials;
