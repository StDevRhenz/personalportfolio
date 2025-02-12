import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Card from './Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>3D Card Design</h1>
      <Card />
    </div>
  );
}

export default App;