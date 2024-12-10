import React from "react";
import { homeBanner, bannerImg } from "../components/Images";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

function HomeBanner() {
  return (
    <Box
      component="section"
      sx={{
        background: `url('${homeBanner}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        py: 12,
        pt: { xs: 6, sm: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={{ xs: 1, sm: 5 }}>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              order: { xs: 2, sm: 1 },
            }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "36px",
                    sm: "42px",
                    md: "48px",
                    lg: "63.75px",
                  },
                  color: "#fff",
                  fontWeight: 700,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Master the Skills
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Poppins",
                  fontSize: {
                    xs: "28px",
                    sm: "30px",
                    md: "30px",
                    lg: "37.50px",
                  },
                  color: "#fff",
                  fontWeight: 700,
                  textAlign: { xs: "center", sm: "left" },
                  mb: 2,
                }}
              >
                to Accelerate Your Career
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "14px", sm: "16px" },
                  color: "#fff",
                  mb: { xs: 3, sm: 4.5 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Develop the skills that will empower you to take control of your
                career path. Elevate your professional journey by building the
                expertise that drives lasting success.
              </Typography>
              <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsJhMTGVEmGQoLN-YECCZgnz6tc_9v-K10gENt91-jfTLCVg/viewform?usp=sf_link"
                  target="_blank"
                  sx={{
                    textTransform: "capitalize",
                    color: "#fff",
                    fontFamily: "Poppins",
                    fontSize: { xs: "16px", sm: "18.75px" },
                    backgroundColor: "#1E1E1E",
                    borderRadius: "12px",
                    px: 2,
                  }}
                >
                  Apply Now &nbsp; <EastIcon />
                </Button>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, sm: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              order: { xs: 1, sm: 2 },
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{
                  maxWidth: { xs: "420px", sm: "510px" },
                  width: "100%",
                  mx: "auto",
                }}
                src={bannerImg}
                alt="Banner Image"
              />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default HomeBanner;
