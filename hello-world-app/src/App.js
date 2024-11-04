import React, { useState } from 'react'; // Importing React and the useState hook

function App() {
  // Defining the 'message' state variable with an initial empty string value
  // 'setMessage' function is used to update the 'message' state
  const [message, setMessage] = useState('');

  // Defining the fetchMessage function which will be executed on button click
  const fetchMessage = () => {
    // Updating the 'message' state to 'Hello, World from React!'
    setMessage('Hello, World from React!');
  };

  return (
    <div style={styles.container}> {/* Main container div with inline styles */}
      <h1>Hello World App</h1> {/* Heading that displays the app title */}
      
      {/* Button that calls fetchMessage function on click */}
      <button onClick={fetchMessage} style={styles.button}>
        Fetch Message {/* Button label */}
      </button>
      
      {/* Displays the 'message' state, which updates on button click */}
      <p>{message}</p>
    </div>
  );
}

// Inline CSS style object to define styling
const styles = {
  container: {
    display: 'flex', // Using Flexbox layout
    flexDirection: 'column', // Arranges items in a column
    alignItems: 'center', // Centers items horizontally
    justifyContent: 'center', // Centers items vertically
    height: '100vh', // Sets full viewport height
    backgroundColor: '#f0f0f0', // Sets background color
    fontFamily: 'Arial, sans-serif' // Sets font styling
  },
  button: {
    padding: '10px 20px', // Sets padding for the button
    fontSize: '16px', // Sets font size
    cursor: 'pointer', // Shows pointer cursor on hover
    marginTop: '10px' // Adds space between the button and heading
  }
};

export default App; // Exports the component so it can be used in other files

