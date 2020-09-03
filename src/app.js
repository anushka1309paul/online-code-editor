import React from 'react';
import CodeEditor from './components/codeEditor.js';
import ReactPrismEditor from "react-prism-editor";
import Input from './components/Input.js';
import Output from './components/Output.js'
import './css/App.css';

class App extends React.Component {
    render() {
        return (
            <>
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
                    <ReactPrismEditor
                        className="input"
                        language={"c"}
                        theme={"default"}
                        code={""}
                        lineNumber={true}
                        readOnly={false}
                        clipboard={false}
                        changeCode={code => {
                            this.code = code
                            console.log(code)
                        }}
                    />
                    <div className="testcases">
                        <Input />
                    </div>
                    <div className="output">
                        <Output text="Something"/>
                    </div>
                    <div className="run">
                        <button>Run</button>
                        <button>Save</button>
                         <button>Save output</button>
                    </div>
                    <div className="details">Execution Time and compile features</div>
                </div>
            </>
        );
    }
}

/*function App() {
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
}*/

export default App;
