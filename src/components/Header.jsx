import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Collapse from "@mui/material/Collapse";
import { Container } from "@mui/material";
import { logo } from "./Images";

export default function Header() {
  const isMobile = useMediaQuery("(max-width:800px)");
  const [showMenu, setShowMenu] = React.useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box component="section">
      <Container maxWidth="xl">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar
              sx={{ justifyContent: "space-between", px: "0 !important" }}
            >
              <Box component="a" href="/">
                <Box
                  component="img"
                  sx={{ maxWidth: "180px", mt: 1 }}
                  src={logo}
                  alt="logo"
                />
              </Box>

              {/* Menu for mobile */}
              {isMobile ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleToggleMenu}
                >
                  <MenuIcon />
                </IconButton>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    gap: { xs: "8px", md: "20px" },
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15.75px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0B5384",
                      },
                    }}
                    href="#"
                    color="inherit"
                  >
                    Home
                  </Button>
                  <Button
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15.75px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0B5384",
                      },
                    }}
                    href="#"
                    color="inherit"
                  >
                    Courses
                  </Button>
                  <Button
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15.75px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0B5384",
                      },
                    }}
                    href="#"
                    color="inherit"
                  >
                    Blog
                  </Button>
                  <Button
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15.75px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0B5384",
                      },
                    }}
                    href="#"
                    color="inherit"
                  >
                    Community
                  </Button>
                  <Button
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15.75px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "#0B5384",
                      },
                    }}
                    href="#"
                    color="inherit"
                  >
                    About
                  </Button>
                  <Button
                    variant="contained"
                    href="#"
                    sx={{
                      backgroundColor: "#0B5384",
                      color: "#fff",
                      borderRadius: "5px",
                      fontFamily: "Inter",
                      fontSize: "17.65px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#0B5384",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </Box>
              )}
            </Toolbar>
          </AppBar>

          {/* Smooth Accordion-style Mobile Menu */}
          <Collapse
            in={showMenu}
            sx={{ display: isMobile ? "block" : "none" }}
            timeout="auto"
            unmountOnExit
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1.5,
                py: 2,
                backgroundColor: "#D0ECFE",
                position: "absolute",
                width: "100%",
                top: { xs: "56px", sm: "64px" },
                left: 0,
                zIndex: 10,
              }}
            >
              <Button
                sx={{
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                    color: "#fff",
                  },
                }}
                href="#"
                color="inherit"
              >
                Home
              </Button>
              <Button
                sx={{
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                    color: "#fff",
                  },
                }}
                href="#"
                color="inherit"
              >
                Courses
              </Button>
              <Button
                sx={{
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                    color: "#fff",
                  },
                }}
                href="#"
                color="inherit"
              >
                Blog
              </Button>
              <Button
                sx={{
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                    color: "#fff",
                  },
                }}
                href="#"
                color="inherit"
              >
                Community
              </Button>
              <Button
                sx={{
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                    color: "#fff",
                  },
                }}
                href="#"
                color="inherit"
              >
                About
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#0B5384",
                  color: "#fff",
                  borderRadius: "5px",
                  width: "95%",
                  "&:hover": {
                    backgroundColor: "#0B5384",
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Collapse>
        </Box>
      </Container>
    </Box>
  );
}
