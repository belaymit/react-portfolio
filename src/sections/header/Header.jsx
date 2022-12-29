import React from 'react';
import headerImg from '../../assets/my-profile.jpg';
import headerSocial from './headerSocial';
import './header.css';

const Header = () => (
  <header id="header" className="header">
    <div className="container header-container">
      <div className="header-profile">
        <img src={headerImg} alt="my profile" />
      </div>
      <h3>Belay Birhanu G.</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptate quo vero libero, perspiciatis autem nostrum expedita
        dolore cupiditate voluptatum tempore.
      </p>
      <div className="header-cta">
        <a href="#contacts" className="btn primary"> Let Us Talk</a>
        <a href="#portfolio" className="btn light">My Work</a>
      </div>
      <div className="header-socials">
        {
          headerSocial.map((item) => (
            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))
        }
      </div>
    </div>
  </header>
);

export default Header;
