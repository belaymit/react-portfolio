import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import FAQ from '../../components/FAQ';
import faqs from './faqsData';
import './faqs.css';

const FAQs = () => (
  <section id="faqs" className="faqs">
    <div className="faqs-container">
      <div className="faqs-header">
        <span><FaQuestion /></span>
        <h4>FAQs</h4>
      </div>
      <div className="faqs-wrapper">
        {
          // eslint-disable-next-line max-len
          faqs.map(({ id, question, answer }) => <FAQ key={id} question={question} answer={answer} />)
        }
      </div>
    </div>
  </section>
);

export default FAQs;
