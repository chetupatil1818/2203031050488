import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Divider } from '@mui/material';
import { nanoid } from 'nanoid';

function UrlForm() {
  const [urls, setUrls] = useState([{ originalUrl: '', shortcode: '', validity: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addRow = () => {
    if (urls.length < 5) {
      setUrls([...urls, { originalUrl: '', shortcode: '', validity: '' }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shortened = urls.map((item) => {
      const code = item.shortcode || nanoid(6);
      return {
        originalUrl: item.originalUrl,
        shortUrl: `https://smart.ly/${code}`,
        validity: item.validity || '∞',
        createdAt: new Date().toLocaleString()
      };
    });

    setResults(shortened);

    const history = JSON.parse(localStorage.getItem("urlHistory")) || [];
    localStorage.setItem("urlHistory", JSON.stringify([...shortened, ...history]));

    setUrls([{ originalUrl: '', shortcode: '', validity: '' }]);
  };

  return (
    <Paper elevation={3} style={{ padding: '2rem', background: '#fefefe' }}>
      <form onSubmit={handleSubmit}>
        {urls.map((item, index) => (
          <div key={index}>
            <TextField
              label="Original URL"
              required
              fullWidth
              margin="dense"
              value={item.originalUrl}
              onChange={(e) => handleChange(index, 'originalUrl', e.target.value)}
            />
            <TextField
              label="Custom Shortcode (optional)"
              fullWidth
              margin="dense"
              value={item.shortcode}
              onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
            />
            <TextField
              label="Validity (minutes)"
              type="number"
              fullWidth
              margin="dense"
              value={item.validity}
              onChange={(e) => handleChange(index, 'validity', e.target.value)}
            />
            <Divider style={{ margin: '1rem 0' }} />
          </div>
        ))}

        <Button variant="outlined" onClick={addRow} disabled={urls.length >= 5}>➕ Add</Button>
        <Button variant="contained" type="submit" style={{ marginLeft: '1rem' }}>🚀 Shorten</Button>
      </form>

      {results.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <Typography variant="h6">Result:</Typography>
          {results.map((item, idx) => (
            <div key={idx} style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
              <p><strong>Original:</strong> {item.originalUrl}</p>
              <p><strong>Short:</strong> <a href={item.originalUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></p>
              <p><strong>Validity:</strong> {item.validity} minutes</p>
              <p><strong>Created At:</strong> {item.createdAt}</p>
            </div>
          ))}
        </div>
      )}
    </Paper>
  );
}

export default UrlForm;
