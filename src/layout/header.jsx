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
import { HeaderProfile, Logo, Dot, ChooseImg,CheckIcon, RightArrowIcon, PlusIcon, PartnerRightImg } from "../assets";
import ResponsiveAppBar from "./navbar";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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

const PartnerBox = styled(Box)({
  '& .partner-heading': {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 700,
    lineHeight: 1.2
  }
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
        <Box className='circle-box' />
        <Grid container spacing={4} alignItems="center">
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

      {/* Choose Section */}
      <ChooseBox style={{backgroundColor: '#f0f4ff', zIndex: -2, position: 'relative', top: -5, padding: '80px 0px'}}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{alignItems: 'center'}}>
            <Grid className="choose-img-box" item xs={12} md={6} style={{textAlign: 'center'}}>
              <img
                src={ChooseImg}
                alt="RegisterKaro"
                style={{ width: "100%", maxWidth: 421, height: 600, objectFit: 'contain'}}
              />
              <Card className='choose-side-card'
                style={{ textAlign: "center", padding: "10px" }}
                elevation={3}
              >
                <CardContent style={{padding: 0, display: 'flex', alignItems: 'center'}}>
                  <Box style={{borderRight: '1px solid lightgray', maxWidth: 80}}>
                    <Typography
                      style={{ fontWeight: 500, color: "inherit", textAlign: 'start', fontSize: 18, lineHeight: 1.3 }}
                    >
                      100+ Rating
                    </Typography>
                    <Typography variant="body1" style={{textAlign: 'start', fontWeight: 400, fontSize: 12, color: '#161e2e'}}>
                    100+ Rating
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      style={{ fontWeight: "normal", color: "inherit", textAlign: 'start', fontSize: 14, maxWidth: 130, paddingLeft: 10 }}
                    >
                      Trusted by <b>20,000+</b> clients
                    </Typography>
                  </Box>

                </CardContent>
              </Card>
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

      {/* Services section */}
      <Box style={{paddingTop: 80}}>
        <Container maxWidth="lg">
          <Typography className="choose-text" style={{textAlign: 'center', width: 'fit-content', marginInline: 'auto'}}>Our Services</Typography>
          <Grid container spacing={4} mt={3} style={{borderBottom: '1px solid gray', paddingBottom: 50}}>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Company <br/> Formation</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Company Secretarial <br/> Services</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Virtual Office <br/> Address</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Annual Compliance <br/> Services</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>VAT Registration, <br/> Preparation & Filing</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Payroll <br/> Services</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Bookkeeping <br/> Services</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{textAlign: 'center'}}>
              <Box style={{boxShadow: '0px 0px 15px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
              <Typography>Live Online Webinars <br/> & Workshops</Typography>
            </Grid>
          </Grid>
          <Box style={{paddingBlock: 30, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10}}>
            <Typography style={{maxWidth: '60%', fontSize: 18, lineHeight: 1.8}}>Our Client Services Team is always happy to talk to you about what is best for your needs. Contact our team to find out if we are the right fit for you.</Typography>
            <a href="" style={{color: '#ffa229', textDecoration: 'none', fontSize: 20, position: 'relative', paddingRight: 30, display: 'inline-block'}}>
              Explore our services
              <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 24, position: 'absolute', top: 4, right: 0}} alt="" />
            </a>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box className='business-setting-box'>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item className="business-inner-div" xs={12} sm={9}>
              <Box style={{background: 'white', borderRadius: 12, padding: 16, display: 'flex'}}>
                <Box style={{padding: 16, borderRight: '1px solid lightgray'}}>
                  <Typography style={{fontSize: 20, fontWeight: 500, minHeight: 60, marginBottom: 20}}>Small business & Startup Accounts</Typography>
                  <Typography style={{fontSize: 14, marginBottom: 20}}>Make sure your business meets its statutory requirements.</Typography>
                  <Typography style={{fontSize: 14, fontWeight: 700, position: 'relative'}}>Number of employees
                    <br />
                  0 - 10
                  <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 30, position: 'absolute', top: 12, right: 0}} alt="" />
                  </Typography>
                </Box>
                <Box style={{padding: 16, borderRight: '1px solid lightgray'}}>
                  <Typography style={{fontSize: 20, fontWeight: 500, minHeight: 60, marginBottom: 20}}>Growing Business Package</Typography>
                  <Typography style={{fontSize: 14, marginBottom: 20}}>Additional support to help you reach your business goals.</Typography>
                  <Typography style={{fontSize: 14, fontWeight: 700, position: 'relative'}}>Number of employees
                    <br />
                  11 - 50
                  <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 30, position: 'absolute', top: 12, right: 0}} alt="" />
                  </Typography>
                </Box>
                <Box style={{padding: 16}}>
                  <Typography style={{fontSize: 20, fontWeight: 500, minHeight: 60, marginBottom: 20}}>Scale-Up Company Offer</Typography>
                  <Typography style={{fontSize: 14, marginBottom: 20}}>Compliance, reporting & analysis of performance.</Typography>
                  <Typography style={{fontSize: 14, fontWeight: 700, position: 'relative'}}>Number of employees
                    <br />
                  50+
                  <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 30, position: 'absolute', top: 12, right: 0}} alt="" />
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item className="business-inner-div" xs={12} sm={3}>
              <Box style={{background: 'white', borderRadius: 12, padding: '32px 28px'}}>
              <Typography style={{fontSize: 20, fontWeight: 500, minHeight: 60, marginBottom: 20}}>Setting up a business</Typography>
              <Typography style={{fontSize: 14, marginBottom: 20}}>Make sure your business meets its statutory requirements.</Typography>
              <Typography style={{fontSize: 14, fontWeight: 700, position: 'relative'}}>Company Formation <br /> Services 
              <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 30, position: 'absolute', top: 12, right: 0}} alt="" />
              </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BusinessGrow Section */}
      <Box className='business-grow-box' style={{paddingBlock: 100}}>
        <Container maxWidth="lg">
          <Typography style={{textAlign: 'center', fontSize: 37, fontWeight: 600, paddingBottom: 50, lineHeight: 1.2 }}>
            Grow Your Business instead of Complex <br />
            Registration processes and leave it for us
          </Typography>
          <Grid container spacing={4} style={{alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Typography style={{fontSize: 22, textAlign: 'center', minHeight: 66}}>
                With other service providers you would have to <br /> pay for each compliance filing individually!
              </Typography>
              <Box className='outer-grow-box'>
                <Box className='counter-box'>50k
                  <Box style={{position: 'relative'}}>
                    <img src={PlusIcon} style={{position: 'absolute', width: 20, top: -40, left: -15 }} alt="" />
                    <img src={PlusIcon} style={{position: 'absolute', width: 20, top: 0, right: -20}} alt="" />
                    <img src={PlusIcon} style={{position: 'absolute', width: 20, top: 3, left: -57}} alt="" />
                  </Box>
                </Box>
                <Box className='inner-grow-box'>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                  <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'start', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />  Financial Preparation and Audit support - Rs.4,000
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography style={{fontSize: 28, textAlign: 'center', minHeight: 66, display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
                Or you could
              </Typography>
              <Box className='outer-grow-box right-grow-box'>    
                <Box style={{padding: 8, borderRadius: 8, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid lightgray'}}>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: '#ffa229',
                        '&.Mui-checked': {
                          color: '#ffa229',
                        },
                      }}
                    />
                  Use RegisterKaro</Box>
                <Typography style={{marginTop: 48, maxWidth: '90%', marginInline: 'auto'}}>Get all your <b>Compliance</b> done with the help of <b>Industry Experts</b> and channelize that precious time to grow your <b>business</b>.</Typography>
                <Typography style={{marginTop: 48}}>Get Started!</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Partner Section */}
        <PartnerBox style={{backgroundColor: '#f0f4ff',padding: '80px 0px'}}>
          <Container maxWidth="lg">
            <Typography className="partner-heading">We <span style={{color: '#ffa229'}}>partner</span> with the best, <br />
            so that your business can flow <span style={{color: '#ffa229'}}>seamlessly.</span></Typography>
            <Typography style={{textAlign: 'center', marginTop: 24}}>Your Business needs numerous expertise and that's why we are providing you the best services with the best names in the field .
            </Typography>
          </Container>
          <Box style={{display: 'flex', gap: 24, flexWrap: 'nowrap', justifyContent: 'center', overflow: 'auto', marginTop: 80}}>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
          </Box>
          <Box style={{display: 'flex', gap: 24, flexWrap: 'nowrap', justifyContent: 'center', overflow: 'auto', marginTop: 40}}>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
            <Box style={{boxShadow: '0px 0px 10px 5px lightgray', marginBottom: 10, width: 100, height: 100, borderRadius: 5, display: 'inline-block'}}></Box>
          </Box>
          <Container maxWidth="lg" style={{marginTop: 100}}>
          <Grid container spacing={4} sx={{alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography className="we-do-text">WHAT WE DO</Typography>
                <Typography className="choose-content-text">Receive support at every stage of business development.</Typography>
                <Typography>Launch, grow and scale with ease. Each of our clients has a dedicated team that is committed to answering all queries within 24 hours, so you can rely on our helpful and professional support throughout your business journey.</Typography>
                <Box>
                  <Button>Popular Services</Button>
                  <Button style={{padding: '15px 50px'}}>Get Started <img src={RightArrowIcon} className="right-arrow-icon" style={{width: 30, position: 'absolute', top: 12, right: 0}} alt="" /></Button>
                </Box>
              </Box>
            </Grid>
            <Grid className="choose-img-box" item xs={12} md={6} style={{textAlign: 'center'}}>
              <img
                src={PartnerRightImg}
                alt="RegisterKaro"
                style={{ width: "100%", maxWidth: '100%', objectFit: 'contain'}}
              />
            </Grid>
          </Grid>
        </Container>
        </PartnerBox>
    </Box>
  );
};

export default HomePage;