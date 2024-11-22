import React from "react";
import {AppBar, styled} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Logo } from "../assets";
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppbar = styled(AppBar)({
    '@media (max-width: 900px)': {
        '& .MuiToolbar-root.MuiToolbar-gutters': {
        paddingInline: 0
    },
    }
})

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomAppbar
      position="static"
      style={{
        backgroundColor: "#f8f9fa",
        color: "#000",
        boxShadow: "none",
        borderBottom: "2px solid #f2f4d0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              fontSize: isMobile ? 20 : 28,
            }}
          >
            <img src={Logo} alt="Logo" width={isMobile ? "40px" : "50px"} />
            <span style={{ color: "#164760" }}>Register</span>
            <span style={{ color: "#ffa229" }}>Karo</span>
          </Typography>

          {/* Use a flex container for buttons */}
          <div style={{ display: isMobile ? "flex" : "none" }}>
            <MenuIcon style={{width: 24}} />
          </div>
          <div style={{ display: isMobile ? "none" : "flex", gap: "5px" }}>
            <Button
              sx={{
                color: "#000000a6",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": { color: "black", background: "none" },
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#000000a6",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": { color: "black", background: "none" },
              }}
            >
              Startup
            </Button>
            <Button
              sx={{
                color: "#000000a6",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": { color: "black", background: "none" },
              }}
            >
              Blog
            </Button>
            <Button
              sx={{
                color: "#000000a6",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": { color: "black", background: "none" },
              }}
            >
              Contact Us
            </Button>
            <Button
              sx={{
                color: "#000000a6",
                fontWeight: 600,
                textTransform: "capitalize",
                "&:hover": { color: "black", background: "none" },
              }}
            >
              About Us
            </Button>
            <Button
                variant="contained"
                color="warning"
                style={{
                borderRadius: "20px",
                fontWeight: "bold",
                color: "white",
                marginLeft: isMobile ? "0" : "10px",
                background: "#ffa229",
                fontSize: isMobile ? "12px" : "16px",
                }}
            >
                +91 8447746183
            </Button>
          </div>
        </Toolbar>
      </Container>
    </CustomAppbar>
  );
};

export default ResponsiveAppBar;
