import React,{Component} from 'react';
import {Data} from './Data.js';
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
    constructor(){
        super()
            this.state={
               output:"",
               time:"",
               memory:"",
               input:"",
               status:""
            }
           this.run=this.run.bind(this)
           this.getSubmission=this.getSubmission.bind(this)
           this.inp=this.inp.bind(this)
           this.downloadcode=this.downloadcode.bind(this)
           this.downloadoutput=this.downloadoutput.bind(this)
    }
    downloadcode(){
        const element = document.createElement("a");
        const file = new Blob([Data.source_code], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
       // document.body.appendChild(element);  Required for this to work in FireFox
        element.click();
    }
    downloadoutput(){
        const element = document.createElement("a");
        const file = new Blob([this.state.output], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
       // document.body.appendChild(element);  Required for this to work in FireFox
        element.click();
    }
    inp(event){
        const{name,value}=event.target
        this.setState({
            [name]:value
        }) 
    }
    getSubmission(e){
        // e.preventDefault();
        fetch("https://judge0.p.rapidapi.com/submissions/"+ e.toString()+"?base64_encoded=false&&wait=false", {
        method: "GET",
        headers: {
            "x-rapidapi-host": "judge0.p.rapidapi.com",
            "x-rapidapi-key": "a3ed8e11f5msh59fe7be59447dfdp1411afjsn6ba0005a6d69",
            "useQueryString": true
        }
    })
    .then(response=>response.json())
    .then(response => {
        this.setState({
            output:response.stdout,
            time:response.time,
            memory:response.memory,
            status:response.status.description
        })
         console.log(response);
    })
    .catch(err => {
        console.log(err);
   });
}
run(e){
    e.preventDefault();
    fetch("https://judge0.p.rapidapi.com/submissions/?base64_encoded=false", {
    method: "POST",
    headers: {
        "x-rapidapi-host": "judge0.p.rapidapi.com",
        "x-rapidapi-key": "233c351fa8mshf5f5f5809beabc4p19d3d1jsnd9e4af9e8ab5",
        "content-type": "application/json",
        "accept": "application/json",
        "useQueryString": true
    },
    body: JSON.stringify({
        "language_id": 50,
        "source_code": Data.source_code,
        "stdin": this.state.input
      })
})
.then(response=>response.json())
.then(response => {
    console.log(response);
    console.log(response.token);
    this.getSubmission(response.token)
})
.catch(err => {
    console.log(err);
});
}
    render(){ 
        return(
          //Data.status
          <div className="rightinside">
          <div className="testcases">
              <h3>Input</h3>
              <input type="textarea" name="input" value={this.state.input} onChange={this.inp} className="in"/>
              </div>
              <div className="output">
                        <h3>Output</h3>
                        <div>{this.state.output}</div>
                    </div>
              <div className="run">
                        <button className="brun" onClick={this.run}>Run</button>
                        <button className="bsave" onClick={this.downloadcode}>Save</button>
                         <button className="bsout" onClick={this.downloadoutput}>Save output</button>
                    </div>
                    <div className="details">
                        <h4>Execution Time and compile features</h4>
                        {this.state.status!="Accepted"?<div>{this.state.status}</div>:null}
                        {this.state.time ?<div>Time= {this.state.time}</div>:null}
                        {this.state.memory?<div>Memory= {this.state.memory}</div>:null}
                    </div>

              </div>
          
          
      );
      }
  
}

export default Output;
