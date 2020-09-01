import React from 'react';
import Input from './Input';
import Output from './Output'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="navbar">
       <img src="https://pbs.twimg.com/profile_images/927306982037643266/LNUHYNq7_400x400.png" alt="logo" className="logo" height="68px" width="75px" />
       <h1>CODE EDITOR</h1>
       <nav>
         <ul>
           <li><a href="#">HOME</a></li>
           <li><a href="#">ABOUT</a></li>
           <li><a href="#">CONTACT</a></li>
         </ul>
       </nav>
    </div>
      <div className="searchbox">search</div>
      <div className="templates">templates</div>
  <div className="input"><h4>Some code</h4></div>
  <div className="testcases">
     <Input />
    </div>
  <div className="output">
   <Output text="Something"/>
  </div>
  <div className="run">Run|Save|Save output</div>
  <div className="details">Execution Time and compile features</div>
    </div>
  );
}

export default App;
