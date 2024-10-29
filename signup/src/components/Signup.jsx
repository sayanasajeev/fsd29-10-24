import { Button, TextField } from '@mui/material'
import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <div class='react'>
        <h1 class='h'>Welcome react</h1>
        <TextField id='sub' label ='Name' variant='outlined'/><br/><br/><br/>
        <TextField id='sub' label ='age' variant='outlined'/><br/><br/><br/>
        <TextField id='sub' label ='phone number' variant='outlined'/><br/><br/><br/>
        <TextField id='sub' label ='password' variant='outlined'/><br/><br/><br/>
        <Button class='b' variant='contained'>SUBMIT</Button><br/><br/>
    </div>
  )
}

export default Signup