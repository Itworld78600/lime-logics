import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import { courseImg, aboutSectionImg } from "../components/Images";
import EastIcon from "@mui/icons-material/East";

function OurCourses() {
  return (
    <Box component="section" py={5} id="our-courses">
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "28px", sm: "32px", md: "42px" },
              fontWeight: 700,
              color: "#0B0B0B",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box component="span">LimeLogics Courses</Box>
            <Box
              component="span"
              sx={{
                height: "25px",
                width: "25px",
                backgroundColor: "#0B5384",
                borderRadius: "50%",
                ml: 1.5,
                mt: 1,
              }}
            ></Box>
          </Typography>
          <Typography
            sx={{
              maxWidth: "575px",
              mx: "auto",
              fontSize: { xs: "14px", sm: "18px" },
              color: "#515254",
              mt: 1.5,
            }}
          >
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat.
          </Typography>
        </Box>
        <Grid2 container spacing={{ xs: 5, sm: 2, md: 8 }} mt={10}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                backgroundColor: "#F5F3F3",
                borderRadius: "20px",
                px: 3,
                pb: 3,
                "&:hover": {
                  backgroundColor: "#0B5384",
                  "& .hover-text": {
                    color: "#ffffff",
                  },
                  "& .hover-subtext": {
                    color: "#ffffff",
                  },
                  "& .hover-button": {
                    color: "#ffffff",
                  },
                },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{ maxWidth: "100%", mt: -3.25 }}
                  src={courseImg}
                  alt="course image"
                />
              </Box>
              <Typography
                variant="h3"
                className="hover-text"
                sx={{
                  maxWidth: "200px",
                  mx: "auto",
                  fontSize: "21px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#0B5384",
                  my: 2.5,
                }}
              >
                WordPress Design and Development
              </Typography>
              <Typography
                className="hover-subtext"
                sx={{
                  color: "#5A5454",
                  fontSize: "10px",
                  textAlign: "center",
                  mb: 3.5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  href="#"
                  className="hover-button"
                  sx={{
                    textTransform: "capitalize",
                    color: "#242424",
                    fontSize: { xs: "12px", sm: "12px" },
                  }}
                >
                  View Course &nbsp; <EastIcon />
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                backgroundColor: "#F5F3F3",
                borderRadius: "20px",
                px: 3,
                pb: 3,
                "&:hover": {
                  backgroundColor: "#0B5384",
                  "& .hover-text": {
                    color: "#ffffff",
                  },
                  "& .hover-subtext": {
                    color: "#ffffff",
                  },
                  "& .hover-button": {
                    color: "#ffffff",
                  },
                },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{ maxWidth: "100%", mt: -3.25 }}
                  src={courseImg}
                  alt="course image"
                />
              </Box>
              <Typography
                variant="h3"
                className="hover-text"
                sx={{
                  maxWidth: "200px",
                  mx: "auto",
                  fontSize: "21px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#0B5384",
                  my: 2.5,
                }}
              >
                WordPress Design and Development
              </Typography>
              <Typography
                className="hover-subtext"
                sx={{
                  color: "#5A5454",
                  fontSize: "10px",
                  textAlign: "center",
                  mb: 3.5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  href="#"
                  className="hover-button"
                  sx={{
                    textTransform: "capitalize",
                    color: "#242424",
                    fontSize: { xs: "12px", sm: "12px" },
                  }}
                >
                  View Course &nbsp; <EastIcon />
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                backgroundColor: "#F5F3F3",
                borderRadius: "20px",
                px: 3,
                pb: 3,
                "&:hover": {
                  backgroundColor: "#0B5384",
                  "& .hover-text": {
                    color: "#ffffff",
                  },
                  "& .hover-subtext": {
                    color: "#ffffff",
                  },
                  "& .hover-button": {
                    color: "#ffffff",
                  },
                },
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{ maxWidth: "100%", mt: -3.25 }}
                  src={courseImg}
                  alt="course image"
                />
              </Box>
              <Typography
                variant="h3"
                className="hover-text"
                sx={{
                  maxWidth: "200px",
                  mx: "auto",
                  fontSize: "21px",
                  textAlign: "center",
                  fontWeight: 700,
                  color: "#0B5384",
                  my: 2.5,
                }}
              >
                WordPress Design and Development
              </Typography>
              <Typography
                className="hover-subtext"
                sx={{
                  color: "#5A5454",
                  fontSize: "10px",
                  textAlign: "center",
                  mb: 3.5,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  href="#"
                  className="hover-button"
                  sx={{
                    textTransform: "capitalize",
                    color: "#242424",
                    fontSize: { xs: "12px", sm: "12px" },
                  }}
                >
                  View Course &nbsp; <EastIcon />
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={{ xs: 5, md: 15 }} mt={10} id="about">
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ maxWidth: "100%" }}
              src={aboutSectionImg}
              alt="about-us"
            />
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#0B0B0B",
                  fontSize: { xs: "36px", sm: "24px", md: "36px", lg: "46px" },
                  fontWeight: 700,
                  textAlign: { xs: "center", sm: "left" },
                  mb: 3,
                }}
              >
                Know About Learning Platform
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontSize: { xs: "14px", md: "16.38px" },
                  textAlign: { xs: "center", sm: "left" },
                  color: "#595656",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Typography
                sx={{
                  mb: 4,
                  fontSize: { xs: "14px", md: "16.38px" },
                  textAlign: { xs: "center", sm: "left" },
                  color: "#595656",
                }}
              >
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Typography>
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Button
                  href="#"
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: { xs: "16px", md: "21.65px" },
                    backgroundColor: "#0B5384",
                    borderRadius: "12px",
                    px: 2,
                  }}
                >
                  More About Us &nbsp; <EastIcon />
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default OurCourses;
