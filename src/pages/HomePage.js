import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to Student Info Application</h1>
        <div className="home-cta">
          <Link to="/students" className="cta-button">
            View Students
          </Link>
        </div>
        <p className="home-credit">Created by: John Rod Mhar M. Suario</p>
      </div>
    </div>
  );
}

export default HomePage;
