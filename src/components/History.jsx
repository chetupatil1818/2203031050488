import React, { useEffect, useState } from 'react';
import { Paper, Typography, Divider } from '@mui/material';

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('urlHistory')) || [];
    setHistory(data);
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '2rem', background: '#fefefe' }}>
      <Typography variant="h5" gutterBottom> Shortened URL History</Typography>
      {history.length === 0 && <p>No shortened URLs yet.</p>}
      {history.map((item, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <p><strong>Original:</strong> {item.originalUrl}</p>
          <p><strong>Short:</strong> <a href={item.originalUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></p>
          <p><strong>Validity:</strong> {item.validity} minutes</p>
          <p><strong>Created At:</strong> {item.createdAt}</p>
          <Divider style={{ margin: '1rem 0' }} />
        </div>
      ))}
    </Paper>
  );
}

export default History;
