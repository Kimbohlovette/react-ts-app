import React from 'react';
import './App.css';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App [&_*]:transition-all [&_*]:duration-200 [&_*]:ease-linear">
        <NavBar></NavBar>
    </div>
  );
}

export default App;
