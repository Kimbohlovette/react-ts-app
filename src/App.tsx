import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import Hero from './Hero';

function App() {
  return (
    <div className="App container mx-auto [&_*]:transition-all [&_*]:duration-200 [&_*]:ease-linear">
        <NavBar></NavBar>
        <Hero />
    </div>
  );
}

export default App;
