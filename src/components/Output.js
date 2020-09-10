import React,{Component} from 'react';
/*<div className="output">
                        <Output text="Something"/>
                    </div>
                    <div className="run">
                        <button className="brun">Run</button>
                        <button className="bsave">Save</button>
                         <button className="bsout">Save output</button>
                    </div>
                    <div className="details">Execution Time and compile features</div>*/

class  Output extends Component{
    render(){ 
        return(
          //Data.status
          <div className="rightinside">
          <div className="testcases">
              <h3>Input</h3>
              <input type="textarea" className="in"/>
              </div>
              <div className="output">
                        <h3>Output</h3>
                    </div>
              <div className="run">
                        <button className="brun">Run</button>
                        <button className="bsave">Save</button>
                         <button className="bsout">Save output</button>
                    </div>
                    <div className="details">
                        <h4>Execution Time and compile features</h4>
                    </div>

              </div>
          
          
      );
      }
  
}

export default Output;
