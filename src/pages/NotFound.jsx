import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Seo from '../components/Seo/Seo';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Seo
        title="404 - Page Not Found | Prodman"
        description="The page you're looking for doesn't exist."
      />
      
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="not-found-links">
          <Link to="/" className="not-found-btn">Go to Home</Link>
          <Link to="/studio" className="not-found-btn secondary">Visit Studio</Link>
          <Link to="/design" className="not-found-btn secondary">View Tech Concierge</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
