import React, { useState } from 'react';
import { Box, Button, Container, Grid2, Link, Divider, IconButton, TextField, MenuItem, InputAdornment, Select, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import GoogleIcon from '../../assets/svg/google.svg'; 

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement API call for sign up
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', // Vertically center the form
       // height: '90vh', // Set the height to 90vh
        padding: '16px',
        borderRadius: '0 16px 16px 0',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      <Typography
        component="h1"
        variant="h5"
        gutterBottom
        textAlign="left"
        sx={{ alignSelf: 'flex-start', fontSize: '28px', marginBottom: '16px' }} // Reduced font size and margin
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
          '&:hover': { backgroundColor: 'none' } 
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

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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
              helperText={
                <span style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'left', margin: '8px 0' }}>
                  Please enter your email ID
                </span>
              }
            />
          </Grid2>

          <Grid2 container spacing={2}>
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
              helperText={
                <span style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'left', margin: '8px 0' }}>
                  Make sure it contains 8 characters, a number, or symbol
                </span>
              }
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
                        value={formData.countryCode || '+91'}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
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
              helperText={
                <span style={{ fontSize: '0.875rem', color: 'rgba(0, 0, 0, 0.6)', textAlign: 'left', margin: '8px 0' }}>
                  You will receive an OTP on your number
                </span>
              }
            />
          </Grid2>
        </Grid2>

        <Grid2 size={12}>
          <Typography variant="body2" color="text.secondary" align="left" m={1}>
            By selecting Agree and Continue, I agree to{' '}
            <Link href="##" color="primary" underline="hover">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="##" color="primary" underline="hover">
              Privacy Policy
            </Link>.
          </Typography>
        </Grid2>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ bgcolor: "#68f27f" }}
        >
          Agree and Continue
        </Button>

        <Grid2 container justifyContent="center">
          <Grid2>
            Already have an account?{' '}
            <Link href="#" variant="body2">
              Login in
            </Link>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default SparForm;
