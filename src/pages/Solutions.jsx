import { Box, Container, Grid2, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { mobile, solutionBg } from "../components/Images";
function Solutions() {
  return (
    <Box
      component="section"
      sx={{
        background: `url('${solutionBg}')`,
        backgroundSize: { xs: "cover", md: "100% 100%" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        py: 5,
        mt: { xs: 3, md: 5 },
      }}
    >
      <Box>
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="sol-slide"
        >
          <SwiperSlide>
            <Box>
              <Container maxWidth={"lg"}>
                <Grid2 container spacing={5}>
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    <Box sx={{ maxWidth: "440px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            borderRadius: "18px",
                            color: "#fff",
                            backgroundColor: "#000",
                            px: 2.5,
                            py: 0.75,
                          }}
                        >
                          Mobile
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            borderRadius: "18px",
                            color: "#fff",
                            backgroundColor: "#000",
                            px: 2.5,
                            py: 0.75,
                          }}
                        >
                          Entity Framework
                        </Box>
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "35px",
                          fontWeight: 700,
                          color: "#fff",
                          mt: 7,
                          mb: 4.5,
                        }}
                      >
                        Web-Based Embedded Cycling Solution
                      </Typography>
                      <Typography
                        sx={{ fontSize: "14px", color: "#fff", mb: 4 }}
                      >
                        A comprehensive solution for individual and group
                        cycling in interactive settings. It helps over 2,500
                        sport clubs worldwide create a unique and exhilarating
                        cycling experience for their members.
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#fff" }}>
                        "I've been working with Leobit for the past three years
                        and I can't imagine doing it any other way"
                      </Typography>
                    </Box>
                  </Grid2>
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "end" },
                    }}
                  >
                    <Box>
                      <Box
                        component="img"
                        sx={{ maxWidth: "100%" }}
                        src={mobile}
                      />
                    </Box>
                  </Grid2>
                </Grid2>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Container maxWidth={"lg"}>
                <Grid2 container spacing={5}>
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    <Box sx={{ maxWidth: "440px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: 1.5,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            borderRadius: "18px",
                            color: "#fff",
                            backgroundColor: "#000",
                            px: 2.5,
                            py: 0.75,
                          }}
                        >
                          Mobile
                        </Box>
                        <Box
                          component="span"
                          sx={{
                            fontSize: "12px",
                            fontWeight: 600,
                            borderRadius: "18px",
                            color: "#fff",
                            backgroundColor: "#000",
                            px: 2.5,
                            py: 0.75,
                          }}
                        >
                          Entity Framework
                        </Box>
                      </Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: "35px",
                          fontWeight: 700,
                          color: "#fff",
                          mt: 7,
                          mb: 4.5,
                        }}
                      >
                        Web-Based Embedded Cycling Solution
                      </Typography>
                      <Typography
                        sx={{ fontSize: "14px", color: "#fff", mb: 4 }}
                      >
                        A comprehensive solution for individual and group
                        cycling in interactive settings. It helps over 2,500
                        sport clubs worldwide create a unique and exhilarating
                        cycling experience for their members.
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#fff" }}>
                        "I've been working with Leobit for the past three years
                        and I can't imagine doing it any other way"
                      </Typography>
                    </Box>
                  </Grid2>
                  <Grid2
                    size={{ xs: 12, md: 6 }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "center", md: "end" },
                    }}
                  >
                    <Box>
                      <Box
                        component="img"
                        sx={{ maxWidth: "100%" }}
                        src={mobile}
                      />
                    </Box>
                  </Grid2>
                </Grid2>
              </Container>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}

export default Solutions;
