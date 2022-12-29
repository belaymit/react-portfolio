import React from 'react';
import { IoIosColorFilter } from 'react-icons/io';
import Logo from '../../assets/logo.PNG';
import menuList from './menuList';
import './navbar.css';

const Navbar = () => (
  <nav>
    <div className="container nav-container">
      <a href="index.html" className="nav-logo">
        <img src={Logo} alt="logo" />
      </a>
      <ul className="nav-menu">
        {menuList.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
      <button type="button" id="them-icon">
        <IoIosColorFilter />
      </button>
    </div>
  </nav>
);

export default Navbar;
