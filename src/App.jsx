import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(null);
  console.log(display);

  function handleButtonClick(value){
    // if(value === "DEL"){
    //   setDisplay(display.slice(0,-1))
    // } else if(value === "="){
    //   setResult(eval(display))
    // } else if (value = "RESET"){
    //   setResult(null);
    //   setDisplay = ("");
    // }else{
    //   setDisplay(display + value);
    // }
    
    value === "DEL" ? setDisplay(display.slice(0,-1)) : 
    value === "=" ? setResult(eval(display)) :
    value === "RESET" ? (setResult(null), setDisplay((""))) :
    setDisplay(display + value); 
  }
  const buttons = ["1","2","3","DEL","4","5","6","+","7","8","9","-",".","0","/","*","RESET","="]

  return (
    <div className='container'>
      <div className="calculator">
        <div className="resultTxt">
          {result !== null ? result : display}
        </div>
        <div className="btns">
          {
            buttons.map(x => (
              <button key={x} className='btn' onClick={() => handleButtonClick(x)}>{x}</button>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
