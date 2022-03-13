import React from 'react'
import SelectTimeSelectOptionComponent from './components/SelectTimeSelectOptionComponent'

const SelectTimeComponent = (props) => {
  return (
    <div>

      <div>
        <h4>Select start booking time:</h4>
      </div>

      <SelectTimeSelectOptionComponent setReservationTime={props.setReservationTime}/>

      <div style={{fontSize:'small', color:'#888', margin:8}}>
        reservation is for 2 hours
      </div>

    </div>
  )
}

export default SelectTimeComponent