import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title"> Welcome to SmartURL</h1>
        <p className="hero-subtitle">
          Simplify, manage, and track your links with ease. Create short, smart, and shareable URLs.
        </p>
        <Link to="/shorten">
          <Button variant="contained" color="primary" size="large" className="hero-button">
            Get Started
          </Button>
        </Link>
      </section>

      {/* Benefits Section - 2 Cards per Row */}
      <section className="features-section">
        <h2 className="section-title"> Why Use SmartURL?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3> Faster Sharing</h3>
            <p>Short URLs are easier to share and remember across platforms.</p>
          </div>
          <div className="feature-card">
            <h3> Click Tracking</h3>
            <p>Monitor how many times your link was clicked, from where, and when.</p>
          </div>
          <div className="feature-card">
            <h3> Custom Expiry</h3>
            <p>Set how long each URL stays active. Perfect for temporary campaigns.</p>
          </div>
          <div className="feature-card">
            <h3> Custom Shortcodes</h3>
            <p>Create branded short links like <i>smart.ly/yourname</i>.</p>
          </div>
          <div className="feature-card">
            <h3> History Tracking</h3>
            <p>All your shortened URLs are saved locally for easy access later.</p>
          </div>
          <div className="feature-card">
            <h3> Privacy First</h3>
            <p>No login required. Your data stays in your browser, safe and secure.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
