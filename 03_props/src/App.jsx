import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='box'>
        <Card userName="Rohit" age={22} img="https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzQ1NDg4NHx8ZW58MHx8fHx8%2C%5Bobject+Object%5D"/>
        <Card userName="Harshal" age={21} img="https://images.unsplash.com/photo-1560932684-5e552e2894e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MTU4MDExfHxlbnwwfHx8fHw%3D"/>
        <Card userName="onkar" age={23} img="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Nzg1ODE3NHx8ZW58MHx8fHx8%2C%5Bobject+Object%5D"/>
      </div>
    </>
  )
}

export default App
