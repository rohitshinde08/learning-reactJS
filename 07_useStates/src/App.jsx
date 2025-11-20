import React, { useState } from 'react'
import './App.css'
const App = () => {
  
  // let name = 'React'

  const [num, setnum] = useState(0)
  
  function increse() {
    setnum(num + 1)
  }

  function decrese() {
    setnum(num - 1)
  }

  return (
    <div >
      <h1>{num}</h1>
      <button onClick={increse}>Increse</button>
      <button onClick={decrese}>Decrese</button>
    </div>
  )
}

export default App