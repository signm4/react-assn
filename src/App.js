import logo from './logo.svg';
import './App.css';
import HeaderComp from './HComp';
import LeftComp from './LComp';
import RightComp from './RComp';
import FooterComp from './FComp';
// import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header>
      {/* className="App-header">
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
        </a>*/}

        <div className='HComp'>
          <HeaderComp />
        </div>

      </header> 
      <body>
        <div className='LComp'>
          
          <LeftComp />
        </div>

      <div className='RComp'>
          
          <RightComp />
        </div>

        <div className='FComp'>
          
          <FooterComp />
        </div>
      </body>
    </div>
  );
}

export default App;
