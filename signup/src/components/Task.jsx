import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react'

const Task = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={7}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 160 }}
        image="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Majestic Mountains
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Nature is home to a vast array of life forms, from microscopic organisms to large mammals. 
        This biodiversity is crucial for ecosystem health and resilience.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            </Grid>
            <Grid>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1169574276-scaled.jpg?fit=700%2C467"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Aesthetic Beauty
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Ecosystems are communities of living organisms interacting with their environment.
         They include forests, oceans, deserts, and wetlands, each with unique characteristics and functions.
       
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>
            <Grid item xs={7}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://static.vecteezy.com/system/resources/thumbnails/032/255/249/small/the-beautiful-landscape-of-the-lake-with-pink-flowers-and-lily-pads-ai-generated-free-photo.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Vibrant Flora
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Nature is influenced by seasonal changes and climate patterns, which affect weather, 
        plant growth, and animal behavior.
         Different regions have distinct climates that shape their ecosystems
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            </Grid>
            <Grid>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/premium-photo/beautiful-mountain-landscape-lake-with-flowers-mountains-background_835895-15697.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Serene Lakes
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Nature operates through various processes, such as photosynthesis, the water cycle, 
        and nutrient cycling, which sustain life and maintain ecological balance.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </Grid>
        </Grid>
    </div>
  )
}

export default Task