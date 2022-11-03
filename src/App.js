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

        <div className='HComp'>
          {/* Function calling */}
          <HeaderComp /> 
        </div>

      </header> 

      <body>
        <div className='LComp'>
          {/* Classes */}
          <LeftComp />
        </div>

      <div className='RComp'>
          {/* Classes */}
          <RightComp />
        </div>

      </body>

      <footer>
      <div className='FComp'>
      {/* Function calling */}
          <FooterComp />
        </div>
      </footer>
    </div>
  );
}

export default App;
