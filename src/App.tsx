import React from 'react';
import logo from './assets/logo.svg';
import Search from './components/Search';
import Grid from './components/Grid';
import "./style.css";

function App() {
  return (
    <div className="Background">
      <header className="Header">
      </header>
      <Search />
      <Grid />
      
    </div>
  );
}

export default App;