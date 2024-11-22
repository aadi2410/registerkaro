import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  styled
} from "@mui/material";
import { HeaderProfile, Logo, Dot } from "../assets";
import zIndex from "@mui/material/styles/zIndex";

const HeaderContainer = styled(Container)({
    '& .header-img-bg': {
        backgroundColor: '#ffa229',
        display: 'flex',
        justifyContent: 'center',
        width: '65%',
        height: '500px',
        clipPath: 'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)',
        position: 'absolute',
        bottom: 6,
        zIndex: -1,
        left: '26%',
    }
})

const HomePage = () => {
  const handleGetStarted = () => {
    alert("Get Started button clicked!");
  };

  return (
    <Box>
      {/* Header Section */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Container maxWidth="lg">
            <Toolbar>
            <Typography
                variant="h6"
                style={{ flexGrow: 1, fontWeight: "bold",display: 'flex', alignItems: 'center', fontSize: 28 }}
            >
                <img src={Logo} alt="" width='50px' />
                <span style={{color: '#164760'}}>Register</span><span style={{color: '#ffa229'}}>Karo</span>
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Startup</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">About Us</Button>
            <Button
                variant="contained"
                color="warning"
                style={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "10px",
                }}
            >
                +91 8447746183
            </Button>
            </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <HeaderContainer maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              We take care of ALL your business compliance needs
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
                marginTop: "10px",
                color: "#FFB400",
              }}
            >
              RegisterKaro
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "20px", fontSize: "18px" }}
            >
              An online business compliance platform that helps entrepreneurs
              and other individuals with various registrations, tax filings, and
              other legal matters.
            </Typography>
            <Button
              variant="contained"
              color="warning"
              style={{
                marginTop: "20px",
                borderRadius: "10px",
                padding: "10px 20px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Grid>

          {/* Image Content */}
          <Grid item xs={12} md={6} style={{ textAlign: "center", position: 'relative' }}>
            <img src={Dot} alt="dots" style={{position: 'absolute', left: '13%', top: '60px', objectFit: 'contain',
                width: 150, height: 150, zIndex: -1, filter: 'invert(24%) sepia(31%) saturate(1031%) hue-rotate(156deg) brightness(92%) contrast(95%)'}} />
            <img src={Dot} alt="dots" style={{position: 'absolute', right: '8px', bottom: '-67px', objectFit: 'contain',
                width: 150, height: 150, zIndex: -1, filter: 'invert(24%) sepia(31%) saturate(1031%) hue-rotate(156deg) brightness(92%) contrast(95%)'}}   />
            <Box className='header-img-bg'></Box>
            <img
              src={HeaderProfile}
              alt="RegisterKaro"
              style={{ width: "100%", maxWidth: 421, height: 600, objectFit: 'contain'}}
            />
          </Grid>
        </Grid>
      </HeaderContainer>

      {/* Stats Section */}
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Grid container spacing={4}>
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Card
              style={{ textAlign: "center", padding: "20px" }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", color: "#FFB400" }}
                >
                  500+
                </Typography>
                <Typography variant="body1">
                  Businesses Incorporated Every Month
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Card
              style={{ textAlign: "center", padding: "20px" }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", color: "#FFB400" }}
                >
                  20,000+
                </Typography>
                <Typography variant="body1">Clients all over India</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Card
              style={{ textAlign: "center", padding: "20px" }}
              elevation={3}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  style={{ fontWeight: "bold", color: "#FFB400" }}
                >
                  250+
                </Typography>
                <Typography variant="body1">Professionals Network</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
