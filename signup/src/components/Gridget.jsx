import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import React from 'react'

const Gridget = () => {
  return (
    <div>
        <Grid  container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-photo/fantasy-mushrooms-wallpapers-background-photos-images-illustrations_662214-4003.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
                <img src="https://img.freepik.com/premium-photo/fantasy-mushrooms-wallpapers-background-photos-images-illustrations_662214-4003.jpg" height='200' width='378'></img>
                </Grid>
            
        
        <Grid>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static.vecteezy.com/system/resources/thumbnails/025/061/745/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            <img  src="https://static.vecteezy.com/system/resources/thumbnails/025/061/745/small/4k-beautiful-colorful-abstract-wallpaper-photo.jpg"></img>
        </Grid>
        <Grid  item xs={8}>
            <img src="https://t4.ftcdn.net/jpg/06/78/51/55/360_F_678515518_mBTG4aFYf8VCVWTL75PVaiMQhigbhhlY.jpg" height='200' width='378'></img>
        </Grid> 
        <Grid  >
            <img  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0de08a5-30cc-4951-8d8e-4b1951192d6f/dgw1udj-ef691daa-9c03-427e-9cda-f253390327b0.png/v1/fill/w_1280,h_718,q_80,strp/pink_sunset_over_the_ocean_by_3bprototype_dgw1udj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvZDBkZTA4YTUtMzBjYy00OTUxLThkOGUtNGIxOTUxMTkyZDZmXC9kZ3cxdWRqLWVmNjkxZGFhLTljMDMtNDI3ZS05Y2RhLWYyNTMzOTAzMjdiMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Azzm8899z38M1i84dItQo764VTF-cnfuV30YP5Bx9o0" height='200' width='368'></img>
        </Grid>
        </Grid>
    </div>
  )
}

export default Gridget