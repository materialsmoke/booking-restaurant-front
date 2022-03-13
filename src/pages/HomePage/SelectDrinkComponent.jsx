import { Button } from '@mui/material';
import React, {useState,useEffect} from 'react'
import { listOfBears } from '../../backend/api';
import DrinkCustomSelectComponent from './components/DrinkCustomSelectComponent';

const SelectDrinkComponent = (props) => {

  const totalItemsNumber = 325;
  const numberItemsPerPage = 10;

  const [allBears, setAllBears] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState(true)
  const [isNextBtnDisabled, setIsNextBtnDisabled] = useState(false)

  useEffect(() => {
    listOfBears(currentPage, numberItemsPerPage).then(data=>{
      setAllBears(data.data);
    });
  }, [currentPage]);

  const handlePrevBtn = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      setIsNextBtnDisabled(false);
    }else{
      setIsPrevBtnDisabled(true);
    }

    if(currentPage === 2){
      setIsPrevBtnDisabled(true);
    }
  }

  const handleNextBtn = () => {
    const lastPageNumber = Math.ceil(totalItemsNumber / numberItemsPerPage);

    if(currentPage < lastPageNumber){
      setCurrentPage(currentPage + 1);
      setIsPrevBtnDisabled(false);
    }else{
      setIsNextBtnDisabled(true);
    }

    if(currentPage === (lastPageNumber - 1)){
      setIsNextBtnDisabled(true);
    }
  }

  return (
    <div>

      <div>
        <h4>Select your drink:</h4>
      </div>
      <div style={{margin:8}}>
        <Button onClick={handlePrevBtn} variant="contained" sx={{marginRight:2}} disabled={isPrevBtnDisabled}>Prev</Button>
        <Button  onClick={handleNextBtn} variant="contained" disabled={isNextBtnDisabled}>Next</Button>
      </div>

      <div>
        <DrinkCustomSelectComponent options={allBears} setSelectedDrink={props.setSelectedDrink}/>
      </div>

      

    </div>
  )
}

export default SelectDrinkComponent;


// const defaultData = [
//   {
//       "id": 1,
//       "name": "Buzz",
//       "tagline": "A Real Bitter Experience.",
//       "first_brewed": "09/2007",
//       "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
//       "image_url": "https://images.punkapi.com/v2/keg.png",
//       "abv": 4.5,
//       "ibu": 60,
//       "target_fg": 1010,
//       "target_og": 1044,
//       "ebc": 20,
//       "srm": 10,
//       "ph": 4.4,
//       "attenuation_level": 75,
//       "volume": {
//           "value": 20,
//           "unit": "litres"
//       },
//       "boil_volume": {
//           "value": 25,
//           "unit": "litres"
//       },
//       "method": {
//           "mash_temp": [
//               {
//                   "temp": {
//                       "value": 64,
//                       "unit": "celsius"
//                   },
//                   "duration": 75
//               }
//           ],
//           "fermentation": {
//               "temp": {
//                   "value": 19,
//                   "unit": "celsius"
//               }
//           },
//           "twist": null
//       },
//       "ingredients": {
//           "malt": [
//               {
//                   "name": "Maris Otter Extra Pale",
//                   "amount": {
//                       "value": 3.3,
//                       "unit": "kilograms"
//                   }
//               },
//               {
//                   "name": "Caramalt",
//                   "amount": {
//                       "value": 0.2,
//                       "unit": "kilograms"
//                   }
//               },
//               {
//                   "name": "Munich",
//                   "amount": {
//                       "value": 0.4,
//                       "unit": "kilograms"
//                   }
//               }
//           ],
//           "hops": [
//               {
//                   "name": "Fuggles",
//                   "amount": {
//                       "value": 25,
//                       "unit": "grams"
//                   },
//                   "add": "start",
//                   "attribute": "bitter"
//               },
//               {
//                   "name": "First Gold",
//                   "amount": {
//                       "value": 25,
//                       "unit": "grams"
//                   },
//                   "add": "start",
//                   "attribute": "bitter"
//               },
//               {
//                   "name": "Fuggles",
//                   "amount": {
//                       "value": 37.5,
//                       "unit": "grams"
//                   },
//                   "add": "middle",
//                   "attribute": "flavour"
//               },
//               {
//                   "name": "First Gold",
//                   "amount": {
//                       "value": 37.5,
//                       "unit": "grams"
//                   },
//                   "add": "middle",
//                   "attribute": "flavour"
//               },
//               {
//                   "name": "Cascade",
//                   "amount": {
//                       "value": 37.5,
//                       "unit": "grams"
//                   },
//                   "add": "end",
//                   "attribute": "flavour"
//               }
//           ],
//           "yeast": "Wyeast 1056 - American Ale™"
//       },
//       "food_pairing": [
//           "Spicy chicken tikka masala",
//           "Grilled chicken quesadilla",
//           "Caramel toffee cake"
//       ],
//       "brewers_tips": "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
//       "contributed_by": "Sam Mason <samjbmason>"
//   },
  
// ];