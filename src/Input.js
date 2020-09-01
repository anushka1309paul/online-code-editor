import React,{ useState } from 'react';


function Input() {
    const [name,setName]=useState("");
    return(
        <div>
            <h4>Testcases</h4>
            <form>
               <input type="textarea" className="in" value={name} onChange={e=>setName(e.target.value)}/>
            </form>
        </div>
    );
}
export default Input;