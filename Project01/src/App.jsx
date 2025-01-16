import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter] = useState(15)
  //let Counter = 15;

  const addValue = () => {
    console.log("Button Was Clicked ",Counter);
    // Counter = Counter + 1;
    setCounter(Counter + 1)
    
  }
  return (
    <>
    <div>
      <h1>WebX86 Development</h1>
      <h3>Counter Value {Counter}</h3>
      <button onClick={addValue}>Click Me</button>
    </div>
    </>
  )
}

export default App
