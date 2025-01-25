import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${inputValue}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <input
        type = "Text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text here"
        />

        <button onClick={handleButtonClick}>Submit</button>
      </header>
    </div>
  );
  
}

export default App;
