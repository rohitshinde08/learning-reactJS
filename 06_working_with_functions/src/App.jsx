import React from 'react'

const App = () => {

  function btnClicked(val){
    console.log(val);
  }

  return (
    <>
    // button functions
    <div>
      <button 
      onClick={function(elem){
        btnClicked(elem);
      }} 
      onMouseEnter={function(){
        console.log("Mouse enter event triggered");
      }}
      >click here</button>
    </div>


    // input functions
    <div>
      <input 
      onClick={function(){
        console.log('input is clicked')
      }}
      
      onChange={function(elem){
        console.log(elem.target.value)
      }}
      
      type='text' placeholder='enter name'/>
    </div>
    </>

  )
}

export default App