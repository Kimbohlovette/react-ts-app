import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import Hero from './Hero';
import Processes from './Processes';
import Services from './Services';

function App() {
  return (
    <div className="container mx-auto [&_*]:transition-all [&_*]:duration-200 [&_*]:ease-linear">
        <NavBar></NavBar>
        <Hero />
        <Services />
        <Processes />
    </div>
  );
}

export default App;
