import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';


const DisplayName = () => {
    
   var [message, setMessage] = useState();
  const handleReactClick = () => {
        setMessage(" React");
    };

    const handleAngularClick = () => {
        setMessage("Angular");
    };

    const handleNextClick = () => {
        setMessage(' Next');
    };
    useEffect(()=>{
        handleReactClick()
    },[])
  return (
    <div>
        <Typography variant='h4'>WELCOME TO {message}</Typography>
      <Button variant="contained" color="primary" sx={{ marginLeft: 1 }} onClick={handleReactClick}>REACT</Button>  
      <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }} onClick={handleAngularClick}>ANGULAR</Button>
      <Button variant="contained" color="success" sx={{ marginLeft: 1 }} onClick={handleNextClick}>NEXT</Button>
    </div>
  )
}

export default DisplayName