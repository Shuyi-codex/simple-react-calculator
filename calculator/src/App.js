import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)) 
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value)) 
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0)
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> = <span>{result}</span></p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>&#43;</button> 
        <button onClick={minus}>&#8722;</button> 
        <button onClick={times}>&#215;</button> 
        <button onClick={divide}>&#247;</button>
        <button onClick={resetInput}>C</button> 
        <button onClick={resetResult}>AC</button> 
      </form> 
    </div> 
  ); 
} 
 
export default App;