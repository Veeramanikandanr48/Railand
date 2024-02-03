// NavigationBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const NavigationBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (id) => {
    setNavOpen(false);
    setActiveNavItem(id);
  };

  const navItems = [
    { id: '', label: 'Home' },
    { id: 'blog', label: 'Blog' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          {/* Use Link instead of 'a' tag */}
          <img
            src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706613773/Wabeler/z18abxn6u6o1cmssmoxf.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="web-head">Raft</h1>
        </Link>

        <button
          className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end align-items-center ${
            isNavOpen ? 'show' : ''
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex justify-content-center">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${activeNavItem === item.id ? 'active' : ''}`}>
                <Link
                  className="nav-link"
                  to={`/${item.id}`}
                  id={item.id}
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link className="btn btn-contact btn-pill btn-blue ml-32 contact-us" to="/contactus">
            {/* Use Link instead of 'a' tag */}
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
