import { Button, Grid, TextField } from '@mui/material';
import React, {useState} from 'react';
import { post } from '../../backend/api';
import Card from '../../components/Card';
import SubmitButtonComponent from './components/SubmitButtonComponent';
import SelectDrinkComponent from './SelectDrinkComponent';
import SelectNumberOfPeople from './SelectNumberOfPeopleComponent';
import SelectRandomDishComponent from './SelectRandomDishComponent';
import SelectTimeComponent from './SelectTimeComponent';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const HomePage = () => {

  const [selectedDrink, setSelectedDrink] = useState(''); 
  // console.log('selectedDrink', selectedDrink)
  
  const [numberOfPerson, setNumberOfPerson] = useState(2); 
  // console.log('numberOfPerson', numberOfPerson)

  const [reservationTime, setReservationTime] = useState(''); 
  // console.log('reservationTime', reservationTime)
  
  const [selectRandomMeal, setSelectRandomMeal] = useState(''); 
  // console.log('selectRandomMeal', selectRandomMeal)
  
  const [emailInput, setEmailInput] = useState(''); 
  // console.log('emailInput', emailInput)

  let readyToSubmit = false;

  if(
    (selectedDrink !== '') && (selectedDrink !== undefined)
    && ( reservationTime !== '')
    && ( emailInput !== '')
  ){
    readyToSubmit = true;
  }else{
    readyToSubmit = false;
  }

  const MySwal = withReactContent(Swal)

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(
      // selectedDrink,
      // numberOfPerson,
      // reservationTime.toString().slice(4, 21),
      // selectRandomMeal,
      // emailInput,
    );
    
    post('reservation', {
      drink: selectedDrink,
      numberOfPersons: numberOfPerson,
      reservationStartTime: reservationTime.toString().slice(4, 21),
      meal: selectRandomMeal,
      email: emailInput,
    }).then(data=>{
      console.log('sweet alert~~! finished', data);
      if(data.data.status === "error"){
        MySwal.fire({
          title: "Error",
          text: data.data.message,
          icon: "error",
          button: "Ok"
        });
      }else{
        MySwal.fire({
          title: "Success",
          text: 'Booking was successful',
          icon: "success",
          button: "Ok"
        });
      }
      

    });
  }

  return (
    <div style={{padding:20}}>
      <form onSubmit={e=>handleSubmit(e)}>
      
        <Grid container spacing={2}>

          <Card>
            <SelectNumberOfPeople setNumberOfPerson={setNumberOfPerson}/>
          </Card>

          <Card>
            <SelectTimeComponent setReservationTime={setReservationTime}/>
          </Card>

          <Card>
            <SelectRandomDishComponent setSelectRandomMeal={setSelectRandomMeal}/>
          </Card>

          <Card style={{height:550}}>
            <SelectDrinkComponent setSelectedDrink={setSelectedDrink} />
          </Card>

          <Card>
            <div>
              <h4>Enter your email:</h4>
            </div>
            <div>
              <TextField sx={{width:'100%'}} placeholder='email' required variant="outlined" value={emailInput} onChange={e=>{setEmailInput(e.target.value)}}/>
            </div>
            <div style={{marginTop:10}}>
              {readyToSubmit?
                <Button variant='contained' type='submit' >BOOK TIME</Button>
                :<SubmitButtonComponent/>
              }
            </div>
          </Card>

        </Grid>

      </form>
    </div>
  )
};

export default HomePage;