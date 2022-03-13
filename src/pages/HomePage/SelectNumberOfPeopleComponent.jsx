import React from 'react'
import PersonBasicSelectComponent from './components/PersonBasicSelectComponent'

const SelectNumberOfPeople = (props) => {
  return (
    <div>

      <div>
        <h4>How many persons:</h4>
      </div>

      <PersonBasicSelectComponent setNumberOfPerson={props.setNumberOfPerson}/>

    </div>
  )
}

export default SelectNumberOfPeople