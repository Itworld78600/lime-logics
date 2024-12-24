import React from "react";
import { Box, Container, Rating, Typography } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import {
  cryptoakhiDp,
  merouaneDp,
  hazmDp,
  doublezusaDp,
  reviewBg,
  ahmadjallowDp,
  iamcryptogodDp,
} from "../components/Images";
import Flag from "react-world-flags";

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "cryptoakhi",
      country: "Germany",
      countryCode: "de",
      review:
        "Muhammad is a very professional and well-skilled developer. I can recommend him for sure! Thanks again",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={cryptoakhiDp}
            alt="cryptoakhi-dp"
          />
        </Box>
      ),
    },
    {
      id: 2,
      name: "merouane410",
      country: "Algeria",
      countryCode: "dz",
      review:
        "قدم محمد عثمان حلولاً استثنائية لسلسلة الكتل مع خبرة متميزة في التعليمات البرمجية والوثائق التي فاقت التوقعات بكثير. كان العمل معه أمرًا سهلاً، وأوصى به لأي مشروع blockchain!",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={merouaneDp}
            alt="merouane-dp"
          />
        </Box>
      ),
    },
    {
      id: 3,
      name: "johannglb",
      country: "Italy",
      countryCode: "it",
      review:
        "Muhammad Usman delivered EXCEPTIONAL blockchain solutions with outstanding code expertise and documentation that far exceeded expectations. Working with him was a breeze, thanks to his politeness, quick responsiveness, and proactive communication. Highly recommended for any blockchain project!",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            J
          </Box>
        </Box>
      ),
    },
    {
      id: 4,
      name: "hazm80",
      country: "United Arab Emirates",
      countryCode: "ae",
      review:
        "Muhammad Usman truly surpassed all expectations with his professionalism, thorough outstanding quality of his dashboard development work. Working with him was a so good, thanks to his deep understanding of our needs, swift delivery, and exceptional cooperation throughout the project. Highly recommend!",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={hazmDp}
            alt="hazm-dp"
          />
        </Box>
      ),
    },
    {
      id: 5,
      name: "alan21000",
      country: "United Kingdom",
      countryCode: "gb",
      review:
        "extremely well-done job, undoubtedly, one of the top developers on the entire platform, thanks,",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            A
          </Box>
        </Box>
      ),
    },
    {
      id: 6,
      name: "doublezusa",
      country: "United States",
      countryCode: "us",
      review:
        "Absolutely amazing seller! If I could give 10 stars, I would. Highly recommended! Thank you, Usman!",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={doublezusaDp}
            alt="doublezusa-dp"
          />
        </Box>
      ),
    },
    {
      id: 7,
      name: "matthewvonprisk",
      country: "United States",
      countryCode: "us",
      review:
        "They literally made the process so easy for us and delivered in half the time. Definitely recommend",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            M
          </Box>
        </Box>
      ),
    },
    {
      id: 8,
      name: "cryptodegenzz",
      country: "Indonesia",
      countryCode: "id",
      review:
        "Very professional and able developer who patiently went through a large number of changes until the final product was just right. In depth level of knowledge within this space and supportive. Highly recommend working with him",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            C
          </Box>
        </Box>
      ),
    },
    {
      id: 9,
      name: "ahmadjallow",
      country: "United States",
      countryCode: "us",
      review:
        "This team is exceptional, they went above and beyond to make sure we had exactly what we needed. I look forward to our next project together, and yes I highly recommend them, they will take care of you and your project!",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={ahmadjallowDp}
            alt="ahmadjallow-dp"
          />
        </Box>
      ),
    },
    {
      id: 10,
      name: "davidarkenbout",
      country: "Netherlands",
      countryCode: "nl",
      review: "Incredible work! No words! Everyone should hire this man!",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            D
          </Box>
        </Box>
      ),
    },
    {
      id: 11,
      name: "sk3234",
      country: "Germany",
      countryCode: "de",
      review:
        "Muhammad Usman is incredible. He solved my problem within a day. The contact was very nice. I can only recommend him as a very good programmer. The handling of my order was very straightforward. I am very satisfied. Keep up the good work Muhammad Usman.",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            S
          </Box>
        </Box>
      ),
    },
    {
      id: 12,
      name: "anu_s_g",
      country: "India",
      countryCode: "in",
      review:
        "Amazing person with sound technical knowledge. definitely will hire again also suggested to new customers",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            A
          </Box>
        </Box>
      ),
    },
    {
      id: 13,
      name: "januszsiuda",
      country: "Germany",
      countryCode: "de",
      review:
        "Work on this platform for a few years. This man is one of the best developers here. Super fast help, extremely good work. Easy communication. This is how fun it is! 100% recommendable!",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            J
          </Box>
        </Box>
      ),
    },
    {
      id: 14,
      name: "khynatic72",
      country: "Algeria",
      countryCode: "dz",
      review:
        "Expert, Professional and a experienced Blockchain Dev for the job. It was great experience from the start. He's a nice guy to work with",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            K
          </Box>
        </Box>
      ),
    },
    {
      id: 15,
      name: "ozankakaya",
      country: "Turkey",
      countryCode: "tr",
      review:
        "It was a really great experience. We communicated everything before the job, he understood and explained everything clearly. I am satisfied with the result. He made all changes very quickly. He answered all my questions and did his best to help me. Thank you brother!",
      reviewStar: 5,
      clientDp: (
        <Box
          sx={{
            height: "70px",
            width: "70px",
            mr: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#e18e7d",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            O
          </Box>
        </Box>
      ),
    },
    {
      id: 16,
      name: "iamcryptogod",
      country: "Ghana",
      countryCode: "gh",
      review:
        "He is best i have met on Fiverr; he understands you clearly and deliver exactly what you are looking for. I will come back for more",
      reviewStar: 5,
      clientDp: (
        <Box sx={{ height: "70px", width: "70px", mr: 2 }}>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "70px",
              width: "70px",
              borderRadius: "50%",
            }}
            src={iamcryptogodDp}
            alt="iamcryptogod-dp"
          />
        </Box>
      ),
    },
  ];

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
            {reviews.length > 0 &&
              reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      backgroundColor: "#0B5384",
                      borderRadius: "24px",
                      p: { xs: 3, sm: 6 },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      {review.clientDp}
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "19.21px",
                            fontWeight: 600,
                            color: "#fff",
                            mb: 0.5,
                          }}
                        >
                          {review.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "15.37px",
                            color: "#b3cad9",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <Flag
                            code={review.countryCode.toLowerCase()}
                            style={{ maxWidth: "40px", marginRight: "10px" }}
                          />
                          <Box component="span">{review.country}</Box>
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{ fontSize: "15.37px", color: "#b3cad9", mt: 4 }}
                    >
                      {review.review}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={4}>
                      <Rating
                        name="read-only"
                        value={review.reviewStar}
                        readOnly
                        sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}
                        style={{
                          color: "#FFB400",
                        }}
                      />
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}

export default Reviews;
