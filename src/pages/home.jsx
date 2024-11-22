import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
  Grid,
  Paper,
} from '@mui/material';
import { Logo } from '../assets';

const RegisterKaro = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1, color: '#FFB400', fontWeight: 'bold' }}>
            <img src={Logo} alt="" width='50px' />
            <span>Register</span><span>Karo</span>
          </Typography>
          <Box>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Startup</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">About Us</Button>
            <Button
              variant="contained"
              color="warning"
              style={{
                borderRadius: '20px',
                fontWeight: 'bold',
                color: 'white',
                marginLeft: '10px',
              }}
            >
              +91 8447746183
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Grid container spacing={4}>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>
              Your one-stop business solution provider
            </Typography>
            <Typography variant="subtitle1" style={{ marginTop: '10px', fontSize: '18px' }}>
              India's Highest rated incorporation service provider
            </Typography>
            <img
              src="https://www.registerkaro.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpvt-desktop.5c88092a.jpg&w=1200&q=75"
              alt="Business Solution"
              style={{ marginTop: '20px', width: '100%', borderRadius: '10px' }}
            />
          </Grid>

          {/* Right Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={4} style={{ padding: '20px', borderRadius: '10px' }}>
              <Typography variant="h6" style={{ fontWeight: 'bold' }}>
                Submit your Details to get an Instant <span style={{ color: '#FFB400' }}>All-inclusive</span> Quote
                to your email and a <span style={{ color: '#FFB400' }}>FREE</span> Expert consultation
              </Typography>
              <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  style={{ marginBottom: '15px' }}
                  required
                />
                <TextField
                  fullWidth
                  label="Enter Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  style={{ marginBottom: '15px' }}
                  required
                />
                <TextField
                  fullWidth
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  variant="outlined"
                  style={{ marginBottom: '15px' }}
                  required
                />
                <FormControl fullWidth variant="outlined" style={{ marginBottom: '15px' }}>
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    label="State"
                    required
                  >
                    <MenuItem value="State 1">State 1</MenuItem>
                    <MenuItem value="State 2">State 2</MenuItem>
                    <MenuItem value="State 3">State 3</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: '#FFB400',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                  }}
                >
                  Get a Detailed Quotation Now!
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Container maxWidth="lg" style={{ marginTop: '40px' }}>
        <Typography variant="h6" align="center">
          What more?... Every startup incorporated by us gets <span style={{ color: '#FFB400' }}>$4,000</span>
        </Typography>
      </Container>
    </Box>
  );
};

export default RegisterKaro;
