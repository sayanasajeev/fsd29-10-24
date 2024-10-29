import React from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
      
      <AppBar sx={{
            background: 'rgb(36,0,20)',
           background: 'linear-gradient(90deg, rgba(36,0,20,0.9556197478991597) 0%, rgba(50,169,247,1) 0%, rgba(23,192,251,1) 14%, rgba(0,18,255,0.9752275910364145) 52%, rgba(49,153,225,1) 72%, rgba(88,136,241,1) 100%, rgba(60,12,77,1) 100%, rgba(194,105,238,1) 100%);'
        }}>
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit" component="div">
            USESTATE
          </Typography>
          <Box sx={{ marginLeft: 'auto' }}>
            <Link to='/k'>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
          STATEBASICS
        </Button>
        </Link>
        <Link to='/l'>
        <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
          COUNTER
        </Button>
        </Link>
        <Link to='/p'>
        <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
           DISPLAYNAME
          
        </Button>
        </Link>
        <Link to='/'>
        <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
           home
        </Button>
        </Link>

         
        </Box>
        </Toolbar>
      </AppBar>
    

        <br /> <br /><br /> <br /><br /> <br />
        <br />


    </div>
  )
}

export default Navbar
