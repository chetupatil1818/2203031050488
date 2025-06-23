// src/App.jsx
import React, { useState } from 'react';
import UrlForm from './components/UrlForm';
import History from './components/History';
import './index.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <nav className="navbar">
        <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</button>
        <button className={page === 'shorten' ? 'active' : ''} onClick={() => setPage('shorten')}>Shorten URL</button>
        <button className={page === 'history' ? 'active' : ''} onClick={() => setPage('history')}>History</button>
      </nav>

      <h1 className="page-title"> URL Shortener</h1>

      {page === 'home' && (
        <div className="home-content">
          <h2>Welcome to the URL Shortener App!</h2>
          <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
             Shorten long links quickly and easily.
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
             Track your previously shortened URLs.
          </div>
          <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
             Customize short links with your own codes.
          </div>
        </div>
      )}

      {page === 'shorten' && <UrlForm />}
      {page === 'history' && <History />}
    </div>
  );
}

export default App;
