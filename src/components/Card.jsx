import { Grid } from '@mui/material';
import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <div className='card' style={{padding:10, width:'100%', ...props.style}}>{props.children}</div>
    </Grid>
  )
}

export default Card