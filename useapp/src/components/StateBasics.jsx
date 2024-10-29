import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


const StateBasics = () => {
   var[name,setname]=useState("sayana")
   var [displayName, setDisplayName] = useState("");


   const handleInput =(e)=>{
    console.log(e.target.value)
    setname(e.target.value)
   } 


   const handleButtonClick = () => {
    setDisplayName(name); 
};
  return (
    <div>
        <Typography variant='h6'>
            welcome {displayName}
        </Typography>
        <TextField variant='outlined' onChange={handleInput} label='Enter the name'></TextField>
       <br /> <br /> <br />
        <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }} onClick={handleButtonClick}>
            BUTTON
          </Button>
    </div>
  )
}

export default StateBasics