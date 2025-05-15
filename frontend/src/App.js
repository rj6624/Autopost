import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        setError('Could not connect to backend');
        setMessage('');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>Welcome to My Website</h1>
        <h1>Jay Rupareliya Welcomes! 👍</h1>
        <h1>Have good journey</h1>
        <button onClick={() => alert('Hello!')}>Click Me</button>
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <p style={{ color: 'green' }}>{message}</p>
        )}
      </div>
    </div>
  );
}

export default App;
