import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import {
  graphicDesignIcon,
  businessIntelligenceIcon,
  artificialIntelligenceIcon,
  cloudComputingIcon,
  blockchainIcon,
  iotIcon,
  dataAnalyticsIcon,
  cognitiveServicesIcon,
  seoIcon,
} from "../components/Images";

function OurServices() {
  const isMobile = useMediaQuery("(max-width:644px)");
  const isMd = useMediaQuery("(max-width:1162px)");
  const isLg = useMediaQuery("(max-width:1211px)");
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#0B5384", py: { xs: 6, sm: 10 } }}
    >
      <Container maxWidth="xl">
        <Box>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="span"
              sx={{
                display: "block",
                height: "2px",
                width: "50px",
                backgroundColor: "#fff",
                mr: 1.5,
              }}
            ></Box>
            <Box component="span">What We Offer</Box>
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "35px" },
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            Comprehensive Solutions Tailored to Your Goals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 500,
              color: "#fff",
              textAlign: "center",
            }}
          >
            We provide end-to-end software development and web development
            training designed to meet your unique needs. From initial
            consultation to deployment and beyond, our full-cycle services
            ensure seamless project execution and skill enhancement at every
            stage.
          </Typography>
        </Box>
        <Grid2
          container
          spacing={{ xs: 6, sm: 5, lg: 8 }}
          mt={{ xs: 6.5, sm: 12 }}
        >
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={graphicDesignIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Graphic Designing
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  Our dedicated graphic design team transforms ideas into
                  compelling visuals. From logos and branding to website
                  templates and marketing materials, we craft designs that
                  captivate and communicate your vision effectively.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={businessIntelligenceIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Business Intelligence
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  With years of experience, we develop business intelligence
                  solutions that transform data into actionable insights. Our
                  platforms help businesses understand their market, attract the
                  right audience, and convert visitors into loyal customers.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={artificialIntelligenceIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Artificial Intelligence
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  Our expert AI development team creates intelligent
                  applications that solve complex problems and automate
                  processes. From machine learning to advanced algorithms, we
                  bring your ideas to life with cutting-edge technology.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={cloudComputingIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Cloud Computing
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  Our certified developers design and deploy cloud solutions
                  that power games, applications, and enterprise systems. We
                  specialize in crafting full-motion experiences, ensuring
                  reliability and scalability in every project.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={blockchainIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Blockchain Development
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  As industry pioneers, we develop blockchain platforms that
                  serve diverse needs. From decentralized applications to secure
                  web platforms, our expertise ensures innovation and
                  reliability in every blockchain project.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={iotIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  IOT and Embedding
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  With extensive experience, we develop IoT solutions and
                  embedded systems that drive innovation. Our applications and
                  smart products have reached millions, delivering efficient
                  performance and seamless connectivity.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={dataAnalyticsIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Data Analytics
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  Our data analytics services help businesses make informed
                  decisions by transforming raw data into valuable insights.
                  From market analysis to performance tracking, we ensure data
                  becomes a powerful asset.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={cognitiveServicesIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Cognitive Services
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  Our QA and cognitive services teams rigorously test and refine
                  products to ensure optimal functionality. By simulating
                  real-world scenarios, we identify and resolve bugs, ensuring
                  smooth and efficient user experiences.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: {
                  xs: "auto",
                  sm: isMobile ? "210px" : "172px",
                  md: isMd ? "189px" : "165px",
                  lg: isLg ? "172px" : "154px",
                  xl: "136px",
                },
                borderRadius: "5px",
                px: 3,
                pb: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  height: "53px",
                  width: "53px",
                  borderRadius: "50%",
                  position: "relative",
                  top: "-28px",
                  left: "15px",
                  border: "2px solid #B2E0FF",
                }}
              >
                <Box
                  component="img"
                  src={seoIcon}
                  sx={{
                    maxWidth: "32px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  alt="Graphic Design Icon"
                />
              </Box>
              <Box sx={{ mt: -1 }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", color: "#fff", mb: 1.1 }}
                >
                  Search engine optimization
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  We optimize websites and content to enhance search rankings
                  and drive organic growth. As experienced publishers, we also
                  offer Amazon Kindle Direct Publishing services, helping
                  authors and businesses reach a global audience.
                </Typography>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default OurServices;
