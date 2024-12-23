import React from "react";
import {
  Box,
  Container,
  Avatar,
  Typography,
  Rating,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/system";
import { Usman, Rizwan } from "../components/Images";
// Import Swiper styles
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CardWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 60,
  alignItems: "center",
  backgroundColor: "#1E4B7B",
  justifyContent: "space-between",
  borderRadius: "16px",
  padding: "16px",
  color: "#fff",
  maxWidth: "100%",
}));

// Avatar styling
const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: "210px",
  height: "300px",
  borderRadius: "8px",
  border: "2px solid #FFF",
  backgroundColor: "#d2d1d1",
}));

// Box for text and rating alignment
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  flexGrow: 1,
}));

function OurInstructors() {
  const matches = useMediaQuery("(max-width: 600px)");
  return (
    <Box component="section" pt={{ xs: 5, sm: 12 }} pb={{ xs: 6, sm: 10 }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "32px", sm: "45px" },
              fontWeight: 700,
              color: "#0B0B0B",
              textAlign: "center",
            }}
          >
            Meet Our Expert Instructors
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              color: "#515254",
              textAlign: "center",
              maxWidth: "980px",
              textAlign: "center",
              mx: "auto",
              mt: 2,
            }}
          >
            Our instructors are seasoned professionals with extensive experience
            in software development and web technologies. With a passion for
            teaching and a commitment to your growth, they bring real-world
            knowledge and practical insights to every lesson. Whether you're
            mastering the fundamentals or diving into advanced topics, our
            instructors guide you every step of the way, ensuring you gain the
            skills needed to succeed in today’s competitive tech landscape.
          </Typography>
        </Box>
        <Box sx={{ mt: { xs: 0, sm: 6, md: 0, lg: 5 } }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            style={{ maxHeight: matches ? "206px" : "unset" }}
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide style={{ position: "relative", minHeight: "310px" }}>
              <Box>
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: "18px", sm: "25px" },
                    top: { xs: "48px", sm: "0px", md: "85px", lg: "0px" },
                    zIndex: 99,
                    backgroundColor: "#d2d1d1",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      maxWidth: {
                        xs: "110px",
                        sm: "100%",
                        md: "160px",
                        lg: "100%",
                      },
                    }}
                    src={Usman}
                    alt="Instructor 1"
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#0B5384",
                    display: "flex",
                    alignItems: "center",
                    height: { xs: "110px", sm: "185px" },
                    borderRadius: "23px",
                    px: 5,
                    py: 1,
                    pl: { xs: 2.25, sm: 5 },
                    pr: { xs: 1, sm: 5 },
                    position: "relative",
                    mt: { xs: 10, sm: 14 },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: {
                        xs: "112px",
                        sm: "212px",
                        md: "160px",
                        lg: "212px",
                      },
                      mr: { xs: 1, sm: 3, md: 1, lg: 3 },
                    }}
                  >
                    <Box component="img" sx={{ display: "none" }} src={Usman} />
                  </Box>
                  <Box>
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18.7px",
                        },
                        color: "#fff",
                        mb: 0.5,
                        fontWeight: 700,
                      }}
                    >
                      Muhammad Usman Shabbir
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "14.96px",
                        },
                        color: "#fff",
                        mb: { xs: 1, sm: 4 },
                      }}
                    >
                      MERN (React, Node, MongoDB, Express) Blockchain (web3)
                    </Typography>
                    <Box display="flex" alignItems="center">
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
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide style={{ position: "relative", minHeight: "310px" }}>
              <Box>
                <Box
                  sx={{
                    position: "absolute",
                    left: { xs: "18px", sm: "25px" },
                    top: { xs: "48px", sm: "0px", md: "85px", lg: "0px" },
                    zIndex: 99,
                    backgroundColor: "#d2d1d1",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      maxWidth: {
                        xs: "110px",
                        sm: "100%",
                        md: "160px",
                        lg: "100%",
                      },
                    }}
                    src={Rizwan}
                    alt="Instructor 2"
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#0B5384",
                    display: "flex",
                    alignItems: "center",
                    height: { xs: "110px", sm: "185px" },
                    borderRadius: "23px",
                    px: 5,
                    py: 1,
                    pl: { xs: 2.25, sm: 5 },
                    pr: { xs: 1, sm: 5 },
                    position: "relative",
                    mt: { xs: 10, sm: 14 },
                  }}
                >
                  <Box
                    sx={{
                      minWidth: {
                        xs: "112px",
                        sm: "212px",
                        md: "160px",
                        lg: "212px",
                      },
                      mr: { xs: 1, sm: 3, md: 1, lg: 3 },
                    }}
                  >
                    <Box
                      component="img"
                      sx={{ display: "none" }}
                      src={Rizwan}
                    />
                  </Box>
                  <Box>
                    <Typography
                      component="h5"
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18.7px",
                        },
                        color: "#fff",
                        mb: 0.5,
                        fontWeight: 700,
                      }}
                    >
                      Muhammad Rizwan Shabbir
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "12px",
                          lg: "14.96px",
                        },
                        color: "#fff",
                        mb: { xs: 1, sm: 4 },
                      }}
                    >
                      React, Next, PHP, WordPress, Yii2, MySQL
                    </Typography>
                    <Box display="flex" alignItems="center">
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
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default OurInstructors;
