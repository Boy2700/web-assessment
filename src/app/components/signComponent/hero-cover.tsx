"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SparLogo from '../../assets/img/spar-logo.png';
import SparHero from '../../assets/img/spar-hero.png';

const HeroCover = () => {
  return (
    <Box
      sx={{
        position: 'relative',
       // height: '0vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#1F67EA', // Light background
        width:'500px',
        height: '95%',
        borderRadius:2,
        p:2,
        overflow: 'hidden',
      }}
    >
      {/* Logo at the Top Left */}
      <Box sx={{ position: 'absolute', top: '16px', left: '16px' }}>
        <Image
          src={SparLogo}
          alt="Spar Logo"
          width={120} // Adjust logo size
          height={50}
        />
      </Box>

      {/* Hero Image at Center */}
      <Box sx={{ textAlign: 'center', mb: 4, mt:2 }}>
        <Image
          src={SparHero}
          alt="Hero Image"
          width={300} // Large hero image
          height={100}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      {/* Typography Below the Hero Image */}
      <Box sx={{ textAlign: 'center', maxWidth: '600px', px: 2 }}>
        <Box width={'300px'}>
        <Typography component="h1" variant="h4" gutterBottom  color='#fff' textAlign={'left'}>
        We simplify your financial handlings
        </Typography>
        <Typography variant="body1"  color='#fff' textAlign={'left'} fontFamily={'lato'}>
          Register your business or file your tax returns seamlessly with Spar.
        </Typography>
        </Box>
        
      </Box>
    <Typography variant="body2" color="#fff" textAlign="center" mt={15}>
        Copyright &copy; 2021 Spar&#8482;. Inc. Proudly made in India.
     </Typography>
    </Box>
  );
};

export default HeroCover;
