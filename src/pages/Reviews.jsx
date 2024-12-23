import React, { useRef, useState } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Student1, reviewBg } from "../components/Images";

function Reviews() {
  return (
    <Box
      component="section"
      py={{ xs: 5, md: 25 }}
      sx={{
        background: `url('${reviewBg}')`,
        backgroundSize: { xs: "contain", md: "90% 100%" },
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 5, sm: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              color: "#0B0B0B",
              fontSize: { xs: "36px", sm: "45.51px" },
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Trusted by Businesses, Driven by Results
          </Typography>
          <Typography
            sx={{
              color: "#515254",
              fontSize: { xs: "16px", sm: "18px" },
              textAlign: "center",
              my: 2,
            }}
          >
            Discover how our solutions have helped clients overcome challenges,
            scale their businesses, and achieve remarkable success. Their
            experiences highlight the value we bring through innovative software
            development, cutting-edge technology, and unwavering dedication to
            excellence.
          </Typography>
        </Box>
        <Box my={{ xs: 0, md: 20 }}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: -55,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="review-slider"
          >
            <SwiperSlide>
              <Box
                sx={{ backgroundColor: "#0B5384", borderRadius: "24px", p: 6 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
                    <Box
                      component="img"
                      sx={{
                        maxWidth: "100%",
                      }}
                      src={Student1}
                      alt="Student-1"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "19.21px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Usman Shabbir
                    </Typography>
                    <Typography sx={{ fontSize: "15.37px", color: "#b3cad9" }}>
                      UI UX Designer
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "15.37px", color: "#b3cad9", mt: 4 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna eiusmod
                  tempor incididunt ut labore et dolore magna
                </Typography>
                <Box display="flex" alignItems="center" mt={4}>
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
                    style={{
                      color: "#FFB400",
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{ backgroundColor: "#0B5384", borderRadius: "24px", p: 6 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
                    <Box
                      component="img"
                      sx={{
                        maxWidth: "100%",
                      }}
                      src={Student1}
                      alt="Student-1"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "19.21px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Rizwan Shabbir
                    </Typography>
                    <Typography sx={{ fontSize: "15.37px", color: "#b3cad9" }}>
                      UI UX Designer
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "15.37px", color: "#b3cad9", mt: 4 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna eiusmod
                  tempor incididunt ut labore et dolore magna
                </Typography>
                <Box display="flex" alignItems="center" mt={4}>
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
                    style={{
                      color: "#FFB400",
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{ backgroundColor: "#0B5384", borderRadius: "24px", p: 6 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
                    <Box
                      component="img"
                      sx={{
                        maxWidth: "100%",
                      }}
                      src={Student1}
                      alt="Student-1"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "19.21px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Tahir Shabbir
                    </Typography>
                    <Typography sx={{ fontSize: "15.37px", color: "#b3cad9" }}>
                      UI UX Designer
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "15.37px", color: "#b3cad9", mt: 4 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna eiusmod
                  tempor incididunt ut labore et dolore magna
                </Typography>
                <Box display="flex" alignItems="center" mt={4}>
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
                    style={{
                      color: "#FFB400",
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                sx={{ backgroundColor: "#0B5384", borderRadius: "24px", p: 6 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
                    <Box
                      component="img"
                      sx={{
                        maxWidth: "100%",
                      }}
                      src={Student1}
                      alt="Student-1"
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "19.21px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                    >
                      Ali Hassan
                    </Typography>
                    <Typography sx={{ fontSize: "15.37px", color: "#b3cad9" }}>
                      UI UX Designer
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{ fontSize: "15.37px", color: "#b3cad9", mt: 4 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna eiusmod
                  tempor incididunt ut labore et dolore magna
                </Typography>
                <Box display="flex" alignItems="center" mt={4}>
                  <Rating
                    name="read-only"
                    value={4}
                    readOnly
                    sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
                    style={{
                      color: "#FFB400",
                    }}
                  />
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default Reviews;
