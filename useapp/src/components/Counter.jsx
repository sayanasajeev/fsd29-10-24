import { Button, Typography } from '@mui/material'
import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0); 
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1); 
    }
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1); 
    };
  return (
    <div>
        <Typography variant='h4'>Counter: {count}</Typography>
        <Button variant='contained' color='success'  onClick={handleIncrement}>+</Button>&nbsp;
        <Button variant='contained' color='error' onClick={handleDecrement} >-</Button>&nbsp;
    </div>
  )
}

export default Counter