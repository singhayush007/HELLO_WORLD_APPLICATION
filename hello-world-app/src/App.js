import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = () => {
    setMessage('Hello, World from React!');
  };

  return (
    <div style={styles.container}>
      <h1>Hello World App</h1>
      <button onClick={fetchMessage} style={styles.button}>
        Fetch Message
      </button>
      <p>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default App;
