import "./App.css";
import {useState} from 'react'
function App() {
 
   const [count,setCount]=useState(0)
    
   const  addhandle=(value)=>{
   
    return setCount(count+value)

   }
   const removehandel=(value)=>{
    if(count>0){
      return setCount(count-value)
    }
   

   }


  return (
    <div className="App">
      <h2 data-testid="counter-value">{count}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>addhandle(1)}>+</button>
      <button data-testid="counter-increment-button" onClick={()=>removehandel(1)}>-</button>
    </div>
  );
}

export default App;
