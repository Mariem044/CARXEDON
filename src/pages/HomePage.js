import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardMedia } from '@mui/material';


const products = [
    {
      id: 1,
      name: 'asrar alghaz tee black',
      price: '78.000 DT',
      image: 'https://via.placeholder.com/200', // Replace with actual image URL
      soldOut: true,
    },
    {
      id: 2,
      name: 'asrar alghaz tee white',
      price: '78.000 DT',
      image: 'https://via.placeholder.com/200', // Replace with actual image URL
      soldOut: false,
    },
    {
      id: 3,
      name: 'dream astronaut club tee colorful',
      price: '88.000 DT',
      image: 'https://via.placeholder.com/200', // Replace with actual image URL
      soldOut: true,
    },
    {
      id: 4,
      name: 'dream astronaut club tee gray',
      price: '88.000 DT',
      image: 'https://via.placeholder.com/200', // Replace with actual image URL
      soldOut: false,
    },
  ];


const HomePage = () => {
  return (
    <div>
    <Box
      sx={{
        backgroundImage: 'url(https://i.pinimg.com/736x/a8/ad/33/a8ad3324f76b7c12c7ff605bb960e97e.jpg)', // Replace with your image URL
        // backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        paddingTop: '540px', // Adjust padding as needed

      }}
    >
      <Container>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              color:"black"
            },
            width:"150px",
            height: "50px"

          }}
        >
          Shop
        </Button>

        
      </Container>
    </Box>
    <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom  >
          ONLY FIRST 200 ORDERS WILL RECEIVE A PILLOW
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.price}
                  </Typography>
                  {product.soldOut && (
                    <Typography variant="body2" color="error">
                      Sold out
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
};

export default HomePage;
