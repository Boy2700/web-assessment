import React, { useState } from 'react';
import { Box, Button, Grid2, Divider, IconButton, TextField, MenuItem, InputAdornment, Select, Typography, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '../../assets/svg/google.svg';
import { generateSecurityKey } from '../../api/auth';

const API_ENDPOINT = 'https://datacliqq.ditcosoft.com/apis';

const SparForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    mobile: '',
    countryCode: '+91',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const storeInLocalStorage = (data: any) => {
    localStorage.setItem('pendingSignupData', JSON.stringify(data));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const requestBody = {
      requestType: 'REGT',
      userMail: formData.email,
      userPassword: formData.password,
      userFullname: `${formData.firstName} ${formData.lastName}`,
      userPhone: `${formData.countryCode}${formData.mobile}`,
      agentCode: 'TBC', // Replace with your actual agent code
      userAgent: navigator.userAgent,
    };

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Security-Key': generateSecurityKey(),
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Response:', data);
      setIsSignupComplete(true);
    } catch (error) {
      console.error('Error during signup:', error);
      setError('Failed to sign up. Your data has been saved locally.');
      storeInLocalStorage(requestBody);
      setIsSignupComplete(true); // Still redirect to dashboard on error
    } finally {
      setIsLoading(false);
    }
  };

  if (isSignupComplete) {
    return (
      <Link href="/web/dashboard" passHref>
      <Button variant="contained" color="primary">
        Go to Dashboard
      </Button>
    </Link>
    
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        borderRadius: '0 16px 16px 0',
        overflow: 'hidden',
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        gutterBottom
        textAlign="left"
        sx={{ alignSelf: 'flex-start', fontSize: '28px', marginBottom: '16px' }}
      >
        Sign Up
      </Typography>

      <Button
        fullWidth
        startIcon={
          <Image 
            src={GoogleIcon} 
            alt="Google Logo" 
            width={24} 
            height={24} 
            style={{ marginRight: 8 }}
          />
        }
        sx={{ 
          mb: 2, 
          color: '#000', 
          textTransform: 'none', 
          backgroundColor: '#f7f4f4', 
          '&:hover': { backgroundColor: '#e0e0e0' } 
        }}
      >
        Sign up with Google
      </Button>

      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '100%', 
          my: 1 
        }}
      >
        <Divider sx={{ flexGrow: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ px: 2 }}
        >
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1, borderColor: 'rgba(0, 0, 0, 0.12)' }} />
      </Box>

      <Grid2 container spacing={2}>
           <Grid2 size={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="sparinfo@gmail.com"
            helperText="Please enter your email ID"
          />
        </Grid2>

                 <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Brian"
          />
        </Grid2>

                 <Grid2 size={{ xs: 12, sm: 6 }}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Brian"
          />
        </Grid2>

           <Grid2 size={12}>
          <Typography variant="body2" color="text.secondary" align="left" ml={2}>
            Make sure it matches the name on your PAN card
          </Typography>
        </Grid2>

           <Grid2 size={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            helperText="Make sure it contains 8 characters, a number, or symbol"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Grid2>

           <Grid2 size={12}>
          <TextField
            required
            fullWidth
            name="mobile"
            label="Mobile Number"
            type="tel"
            id="mobile"
            autoComplete="tel"
            value={formData.mobile}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value as string })}
                      variant="standard"
                      disableUnderline
                    >
                      <MenuItem value="+91">+91</MenuItem>
                      <MenuItem value="+92">+92</MenuItem>
                      <MenuItem value="+234">+234</MenuItem>
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                    </Select>
                  </InputAdornment>
                ),
              },
            }}
            helperText="You will receive an OTP on your number"
          />
        </Grid2>
      </Grid2>

      <Grid2 size={12}>
      <Typography variant="body2" color="text.secondary" align="left" m={1}>
        By selecting Agree and Continue, I agree to{' '}
        <Link href="##" passHref>
        <Typography component="span" color="primary" sx={{ display: 'inline' }}>
          Terms of Service
        </Typography></Link>{' '}
        and{' '}
        <Link href="##" passHref>
        <Typography component="span" color="primary" sx={{ display: 'inline' }}>
          Privacy Policy
        </Typography>.</Link>
      </Typography>
    </Grid2>


      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={isLoading}
        sx={{ 
          bgcolor: "#68f27f", 
          '&:hover': { bgcolor: "#5ad66f" },
          mt: 2,
          mb: 2
        }}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Agree and Continue'}
      </Button>

      {error && (
        <Typography variant="body2" color="error" align="center" mt={2}>
          {error}
        </Typography>
      )}

      <Grid2 container justifyContent="center" mt={2}>
        <Grid2>
          Already have an account?{' '}
          <Link href="##" passHref>
          <Typography variant="body2" color="primary" sx={{ display: 'inline' }}>
            Log in
          </Typography>
          </Link>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SparForm;

