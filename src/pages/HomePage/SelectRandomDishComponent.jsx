import React, {useState,useEffect} from 'react'
import { aRandomMeal } from '../../backend/api';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';

const SelectRandomDishComponent = (props) => {

  const [randomMeal, setRandomMeal] = useState('');

  useEffect(() => {
    aRandomMeal().then(data=>{
      // console.log('randomMeal', data);
      setRandomMeal(data.data.meals[0].strMeal);
      props.setSelectRandomMeal(data.data.meals[0].strMeal)
    });
  }, []);

  return (
    <div>

      <div>
        <h4>This is your random meal:</h4>
      </div>
      <div style={{margin:8}}>
      </div>

      <FormGroup>
        <FormControlLabel disabled  control={<Checkbox  checked />} label={randomMeal} />
      </FormGroup>

    </div>
  )
}

export default SelectRandomDishComponent;
