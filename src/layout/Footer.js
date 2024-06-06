import * as React from 'react';
import { Box, Button, TextField, Typography, IconButton,InputAdornment } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaTiktok } from 'react-icons/fa'; // Import TikTok icon from react-icons
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Footer() {
  return (
    <Box sx={{ backgroundColor: 'white', color: 'black', padding: '20px', borderTop: '1px solid black', mt: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
        <Box sx={{ display: 'block', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" sx={{ marginRight: '10px' }}>
            Carxedon
          </Typography>
          <Typography variant="body1" sx={{ marginRight: '10px',paddingTop:"50px",paddingBottom:"10px" }}>
          Subscribe to our emails
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Your email"
            size="small"
            sx={{
                backgroundColor: 'white',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#D3D3D3',
                    border:"1px solid"
                  },
                  '&:hover fieldset': {
                    borderColor: '#D3D3D3', // Keep border color black on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor:'#D3D3D3', // Keep border color black on focus
                  },
                },
                borderRadius:"none",
                width:"300px",
                height:"50px"
              }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIcon />
                </InputAdornment>
              ),
            }}
          />
       
        </Box>
        <Box sx={{paddingTop:"50px"}}>
          <IconButton color="inherit" aria-label="facebook" href="https://www.facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="instagram" href="https://www.instagram.com">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="tiktok" href="https://www.tiktok.com">
            <FaTiktok />
          </IconButton>
         
        </Box>
      </Box>
      <Typography variant="body2" align="center">
        © 2024, Carxedon Powered by SBA .
      </Typography>
    </Box>
  );
}

export default Footer;
