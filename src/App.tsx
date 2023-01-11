import React from 'react';
import './App.css';
import { NavBar } from './NavBar';
import Hero from './Hero';
import Processes from './Processes';
import Services from './Services';
import ProductStories from './ProductStories';

function App() {
  return (
    <div className="container mx-auto bg-[#F5F4F0] [&_*]:transition-all [&_*]:duration-200 [&_*]:ease-linear">
        <NavBar></NavBar>
        <Hero />
        <Services />
        <Processes />
        <ProductStories />
    </div>
  );
}

export default App;
