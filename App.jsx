import { useState } from 'react'

import './App.css'

function App() {
let bar= ['About' , 'Schedule' , 'Contact' ]

  return (

    <>
  <div> Banner</div>
    <div id= 'bar' >{bar.map((item)=><div key = {item} > {item}  </div>)}</div> 

  </>
  )
}

export default App
