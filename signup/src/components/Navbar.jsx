import {AppBar, Button, Toolbar,Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      {/* <h1>welcome</h1>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/025/061/745/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"></img> */}
        <AppBar sx={{
            background: 'rgb(36,0,20)',
           background: 'linear-gradient(90deg, rgba(36,0,20,0.9556197478991597) 0%, rgba(50,169,247,1) 0%, rgba(23,192,251,1) 14%, rgba(0,18,255,0.9752275910364145) 52%, rgba(49,153,225,1) 72%, rgba(88,136,241,1) 100%, rgba(60,12,77,1) 100%, rgba(194,105,238,1) 100%);'
        }}>
            <Toolbar>
            
              
                <Typography variant="h6" sx={{ flexGrow: 1 }}>SIGNUP</Typography>
                 
       
          <Link to='/tro'>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
            task
          </Button>
          </Link>
          <Link to='/sro'>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
            Signup
          </Button>
          </Link>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>
            Contact
          </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar