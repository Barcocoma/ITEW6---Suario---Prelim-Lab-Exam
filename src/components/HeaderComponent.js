import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderComponent.css';

function HeaderComponent() {
  const currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Student Info Application</h1>
        <span className="header-date">{currentDate}</span>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/students" className="nav-link">Students</Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
