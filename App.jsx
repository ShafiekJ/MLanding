import { useState } from 'react'
import About from './About'
import Contact from './Contact'
import Schedule from './Schedule'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'react-calendar/dist/Calendar.css';
import './App.css'

function App() {
let bar= ['About' , 'Schedule' , 'Contact' ]
const [currentPage , setCurrentPage] = useState('About')

  return (

    <div id='main' >
  <div id='bannerHolder' > <img id='banner' src= 'Banner.jpg' /></div>
    <div id= 'bar' >{bar.map((item)=>{let selected ='';if(item === currentPage){selected = 'selected'} ;return <div key = {item}  className={`barItem ${selected}`} onClick={(()=>{setCurrentPage(item)})} > {item}  </div>})}</div> 
    <div  id ='mainHolder' >
      {currentPage === 'About' && <About/>}
      {currentPage === 'Schedule' && <Schedule/>}
      {currentPage === 'Contact' && <Contact/>}
    
    
    
    
    
    </div>
  </div>
  )
}

export default App
