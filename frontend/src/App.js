import React, { useEffect, useState } from 'react';

const gradientBg = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontFamily: 'Segoe UI, Arial, sans-serif',
};

const cardStyle = {
  background: 'rgba(0,0,0,0.4)',
  borderRadius: '16px',
  padding: '2rem 3rem',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  textAlign: 'center',
  maxWidth: '400px',
};

const buttonStyle = {
  marginTop: '2rem',
  padding: '0.75rem 2rem',
  border: 'none',
  borderRadius: '8px',
  background: '#ffb347',
  color: '#222',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  cursor: 'pointer',
  transition: 'background 0.2s',
};

function App() {
  const [message, setMessage] = useState('Connecting to backend...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(() => {
        setError('❌ Could not connect to backend');
        setMessage('');
      });
  }, []);

  return (
    <div style={gradientBg}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: '0.5rem', letterSpacing: '2px' }}>🚀 Autopost Dashboard</h1>
        <h2 style={{ fontWeight: 400, marginBottom: '1.5rem', color: '#ffb347' }}>
          Jay Rupareliya Welcomes You!
        </h2>
        <div style={{ margin: '1.5rem 0', fontSize: '1.2rem' }}>
          {error ? (
            <span style={{ color: '#ff6b6b', fontWeight: 'bold' }}>{error}</span>
          ) : (
            <span style={{ color: '#90ee90', fontWeight: 'bold' }}>{message}</span>
          )}
        </div>
        <button
          style={buttonStyle}
          onClick={() => window.open('https://github.com/rj6624/Autopost', '_blank')}
        >
          ⭐ Star on GitHub
        </button>
      </div>
    </div>
  );
}

export default App;
