import { useState } from "react";

const FindSystem =()=>{
    const[avg,setAvg]=useState(0);
   return(<div className="findsystem-section"> 
   
   <h3>Find your solar system</h3>
   <div className="input-container">
   <label >
    Avarege consumption per year
   </label>
    <input type="number" value={avg} onChange={(e)=>{
        setAvg(e.target.value)
    }} className="findsystem-input" />
    </div>
   <button className='w-100 btn btn-secondary'>
    Find
   </button>
   
   </div>)
}
export default FindSystem;
