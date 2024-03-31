import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement =(e)=>{
    setCount(count+1)
  }
  const handleDecrement =(e)=>{
    if(count>0)
    {
      setCount(count-1)
    } else{
      alert("Counter can not be less than 0")
    }
   
  }

  return (
    <>
      <header>
        <h2> Simple Counter App </h2>
      </header>
      <div>
        <h3> Couter is {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        {" "}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
