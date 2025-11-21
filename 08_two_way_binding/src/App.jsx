// import { title } from 'process';
import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const handleSubmit =(e)=>{
    console.log("Form submitted" , title);
    e.preventDefault();
    setTitle('')

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} type="text" placeholder='Enter your name' 
        onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App