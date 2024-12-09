import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import { ourStory, client_1, client_2, client_3 } from "../components/Images";

function OurStory() {
  const isMd = useMediaQuery("(max-width:1040px)");
  return (
    <Box
      component="section"
      pt={{ xs: 2, md: 3 }}
      pb={{ xs: 3, md: 12 }}
      sx={{
        backgroundColor: { xs: "#0B5384", md: "unset" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            background: { xs: "#0B5384", md: `url('${ourStory}')` },
            backgroundRepeat: { xs: "unset", md: "no-repeat" },
            backgroundSize: { xs: "unset", md: "100% 100%" },
            pl: { xs: 0, md: 8 },
            pr: { xs: 0, md: 5 },
            pt: { xs: 3, md: 5 },
            pb: 3,
          }}
        >
          <Grid2 container spacing={5}>
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "40px",
                      sm: "48px",
                      md: isMd ? "48px" : "64px",
                    },
                    fontWeight: 700,
                    color: "#fff",
                    mb: isMd ? 3.5 : 5,
                  }}
                >
                  Join a Thriving Community of Learners!
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMd ? "18px" : "24px",
                    color: "#fff",
                    mb: isMd ? 3.5 : 5,
                  }}
                >
                  Empowering over 10+ members to unlock their potential.
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box mt={1}>
                    <Box
                      component="img"
                      sx={{
                        maxWidth: { xs: "40px", md: isMd ? "50px" : "100%" },
                      }}
                      src={client_1}
                      alt="client-1"
                    />
                    <Box
                      component="img"
                      sx={{
                        maxWidth: { xs: "40px", md: isMd ? "50px" : "100%" },
                        ml: { xs: -2, sm: -3 },
                      }}
                      src={client_2}
                      alt="client-2"
                    />
                    <Box
                      component="img"
                      sx={{
                        maxWidth: { xs: "40px", md: isMd ? "50px" : "100%" },
                        ml: { xs: -2, sm: -3 },
                      }}
                      src={client_3}
                      alt="client-3"
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: isMd ? "18px" : "24px",
                      },
                      fontWeight: 600,
                      color: "#fff",
                      ml: 2,
                    }}
                  >
                    + 5K trusted members
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "35px",
                    px: { xs: 3, sm: 5, md: isMd ? 3.5 : 5 },
                    py: { xs: 2, sm: 3.5, md: isMd ? 2.5 : 3.5 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "24px",
                        md: isMd ? "18px" : "24px",
                      },
                      fontWeight: 600,
                      color: "#222733",
                      mb: { xs: 1.25, sm: 2.25, md: isMd ? 1.5 : 2.25 },
                    }}
                  >
                    Expert-Led Courses
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: isMd ? "14px" : "18px",
                      },
                      color: "#222733",
                      mb: { xs: 0, sm: 0.5 },
                    }}
                  >
                    Our fleet includes well-maintained, industry-leading
                    machines ready for any project.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "35px",
                    px: { xs: 3, sm: 5, md: isMd ? 3.5 : 5 },
                    py: { xs: 2, sm: 3.5, md: isMd ? 2.5 : 3.5 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "24px",
                        md: isMd ? "18px" : "24px",
                      },
                      fontWeight: 600,
                      color: "#222733",
                      mb: { xs: 1.25, sm: 2.25, md: isMd ? 1.5 : 2.25 },
                    }}
                  >
                    Flexible Learning Paths
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: isMd ? "14px" : "18px",
                      },
                      color: "#222733",
                      mb: { xs: 0, sm: 0.5 },
                    }}
                  >
                    Our fleet includes well-maintained, industry-leading
                    machines ready for any project.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "35px",
                    px: { xs: 3, sm: 5, md: isMd ? 3.5 : 5 },
                    py: { xs: 2, sm: 3.5, md: isMd ? 2.5 : 3.5 },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "24px",
                        md: isMd ? "18px" : "24px",
                      },
                      fontWeight: 600,
                      color: "#222733",
                      mb: { xs: 1.25, sm: 2.25, md: isMd ? 1.5 : 2.25 },
                    }}
                  >
                    Hands-On Experience
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: isMd ? "14px" : "18px",
                      },
                      color: "#222733",
                      mb: { xs: 0, sm: 0.5 },
                    }}
                  >
                    Our fleet includes well-maintained, industry-leading
                    machines ready for any project.
                  </Typography>
                </Box>
              </Box>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }} mt={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                  top: { xs: 0, md: 22 },
                }}
              >
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "42px",
                        md: isMd ? "32px" : "54px",
                      },
                      fontWeight: 700,
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    120K+
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "20px",
                        md: isMd ? "18px" : "24px",
                      },
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    Trusted members
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "42px",
                        md: isMd ? "32px" : "54px",
                      },
                      fontWeight: 700,
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    50K+
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "20px",
                        md: isMd ? "18px" : "24px",
                      },
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    Active courses
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "28px",
                        sm: "42px",
                        md: isMd ? "32px" : "54px",
                      },
                      fontWeight: 700,
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    10K+
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "20px",
                        md: isMd ? "18px" : "24px",
                      },
                      color: { xs: "#fff", md: "#0B1727" },
                      textAlign: "center",
                    }}
                  >
                    Talented tutors
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}

export default OurStory;
