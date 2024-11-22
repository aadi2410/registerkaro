import React from "react";
import './header.css';
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
import { HeaderProfile, Logo, Dot, ChooseImg,CheckIcon } from "../assets";
import ResponsiveAppBar from "./navbar";

const HeaderContainer = styled(Container)({
    '& .header-img-bg': {
        backgroundColor: '#ffa229',
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '413px',
        width: '100%',
        height: '500px',
        clipPath: 'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)',
        position: 'absolute',
        bottom: 3,
        zIndex: -1,
        left: '26%',
        '@media (min-width: 900px) and (max-width: 1100px)': {
          maxWidth: '78% !important',
        },
        '@media (max-width: 600px)': {
          maxWidth: '80% !important',
          left: '20% !important',
        },
        '@media (max-width: 450px)': {
          maxWidth: '90% !important',
          left: '10% !important',
        },
    },
    '@media (max-width: 900px)': {
        marginTop: 100,
        paddingBottom: 100,
          '& .homepage-side-card': {
            left: '20px !important',
          }
    },
    '@media (max-width: 450px)': {
      '& .heading-text': {
        fontSize: '32px !important'
      },
      '& .homepage-side-card': {
        left: 'unset !important',
        top: 280,
        width: '160px !important'
      },
      '& .homepage-side-card2': {
        bottom: 110,
        left: 'unset !important'
      },
      '& .homepage-side-card3': {
        bottom: 4,
        right: 'unset !important'
      },
      }
})

const ChooseBox = styled(Box)({
  '& .choose-flex-box': {
    display: 'flex', alignItems: 'center', gap: 15, flexWrap: 'wrap', paddingLeft: 50,
  },
  '@media (max-width: 900px)': {
      '& .choose-flex-box': {
        paddingLeft: 'unset'
      },
      '& .choose-img-box': {
        order: 1,
      },
      '& .choose-img-box img': {
        height: 'unset !important'
      },
  },
  '@media (max-width: 500px)': {
    '& .choose-flex-box': {
      flexDirection: 'column'
    },
    '& .choose-flex-box > p': {
      maxWidth: 'unset !important',
      minWidth: 'unset !important',
      width: 'calc(100% - 40px)'
    },
  },
})

const HomePage = () => {
  const handleGetStarted = () => {
    alert("Get Started button clicked!");
  };

  return (
    <Box>
      {/* Header Section */}
      <ResponsiveAppBar />

      {/* Hero Section */}
      <HeaderContainer maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              We take care of ALL your business compliance needs
            </Typography>
            <Typography className="heading-text"
                style={{ flexGrow: 1, fontWeight: "bold",display: 'flex', alignItems: 'center', fontSize: 50 }}
            >
                <span style={{color: '#164760'}}>Register</span><span style={{color: '#ffa229'}}>Karo</span>
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
              style={{
                marginTop: "20px",
                borderRadius: "10px",
                padding: "5px 20px",
                fontWeight: "bold",
                fontSize: "16px",
                background: '#ffa229', textTransform: 'capitalize', fontWeight: 400
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </Grid>

          {/* Image Content */}
          <Grid item xs={12} md={6} style={{ textAlign: "center", position: 'relative' }}>
            <img className='homepage-side-img' src={Dot} alt="dots" />
            <Card className='homepage-side-card'
                style={{ textAlign: "center", padding: "10px 20px" }}
                elevation={3}
              >
                <CardContent style={{padding: 0}}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "normal", color: "inherit", textAlign: 'start', fontSize: 32 }}
                  >
                    500+
                  </Typography>
                  <Typography variant="body1" style={{textAlign: 'start', fontWeight: 400, fontSize: 16, color: '#161e2e'}}>
                    Businesses Incorporated Every Month
                  </Typography>
                </CardContent>
              </Card>
            <Card className='homepage-side-card2'
                style={{ textAlign: "center", padding: "10px 20px" }}
                elevation={3}
              >
                <CardContent style={{padding: 0}}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "normal", color: "inherit", textAlign: 'start', fontSize: 32 }}
                  >
                     20,000+
                  </Typography>
                  <Typography variant="body1" style={{textAlign: 'start', fontWeight: 400, fontSize: 16, color: '#161e2e'}}>
                  Clients all over India
                  </Typography>
                </CardContent>
              </Card>
            <Card className='homepage-side-card3'
                style={{ textAlign: "center", padding: "10px 20px" }}
                elevation={3}
              >
                <CardContent style={{padding: 0}}>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "normal", color: "inherit", textAlign: 'start', fontSize: 32 }}
                  >
                     250+
                  </Typography>
                  <Typography variant="body1" style={{textAlign: 'start', fontWeight: 400, fontSize: 16, color: '#161e2e'}}>
                  Professionals Network
                  </Typography>
                </CardContent>
              </Card>
            <img className='homepage-side-img2' src={Dot} alt="dots" />
            <Box className='header-img-bg'></Box>
            <img
              src={HeaderProfile}
              alt="RegisterKaro"
              style={{ width: "100%", maxWidth: 421, height: 600, objectFit: 'cover'}}
            />
          </Grid>
        </Grid>
      </HeaderContainer>

      {/* Stats Section */}
      <ChooseBox style={{backgroundColor: '#f0f4ff', zIndex: -2, position: 'relative', top: -5, padding: '80px 0px'}}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{alignItems: 'center'}}>
            <Grid className="choose-img-box" item xs={12} md={6} style={{textAlign: 'center'}}>
              <img
                src={ChooseImg}
                alt="RegisterKaro"
                style={{ width: "100%", maxWidth: 421, height: 600, objectFit: 'contain'}}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography className="choose-text">Why choose us</Typography>
                <Typography className="choose-content-text">Our All-In-One Platform And Team Of Experts will help direct you in the right path and ensure that your business starts the right way in record time.</Typography>
                <Box className="choose-flex-box">
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    Affordable</Typography>
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    Compliance Ensured</Typography>
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    Simplified Process</Typography>
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    On-time Service</Typography>
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    Instant Response</Typography>
                  <Typography style={{background: 'white', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 8, color: 'balck', padding: '12px 20px', flex: 1, maxWidth: '40%', minWidth: '35%'}}>
                    <img src={CheckIcon} width={24} alt="" />
                    Industry Experts</Typography>
                 </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ChooseBox>
    </Box>
  );
};

export default HomePage;
