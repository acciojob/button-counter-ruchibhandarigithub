
import React,{ useState } from "react";
import './../styles/App.css';

const App = () => {
 const [count,setCount] = new useState(0);
 const handleClick =()=>{
    setCount(count+1);
 }
  return (
    <div>
        
        <p>Button clicked {count} times</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App;
