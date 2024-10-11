import React, {useState} from 'react'
import Calendar from 'react-calendar'
import TimePicker from 'react-time-picker';
export default function Schedule() {
  const [date , setDate] = useState( '')
  const [time , setTime] = useState('00:00')

  const appointments = { // date:{time}

  }
  function book(date , time){
    if(appointments[date]){
        if(appointments[date][time]){
            alert('Time Slot booked');
            return
        }
    }
    appointments[date] = {}
    appointments[date][time] = true //make the value the duration of the appointment as an improvement
    alert(`Booking for ${date} at time ${time} made`)


}

    return (
    <div>
        Schedule an appointment
        <div>

<Calendar onClickDay={((e)=>{
            setDate(e)

})} />  
    <div  > {<TimePicker onChange={setTime}  value={time} />} 
    <div>

    </div>

     </div>
        </div>
        <button onClick={(()=>{
            let day = date.getDate()
            let month = date.getMonth()
            let year = date.getFullYear()
            let fullDate = day + ' '+ month + ' '+year
            book(fullDate , time)
        })} >Book</button>
    <div>



    </div>

    </div>
  )
}
