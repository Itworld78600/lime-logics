import { Box, Container, Grid2, Typography } from "@mui/material";
import React from "react";
import {
  graphicDesignIcon,
  businessIntelligenceIcon,
  artificialIntelligenceIcon,
  cloudComputingIcon,
  blockchainIcon,
  iotIcon,
} from "../components/Images";

function OurServices() {
  return (
    <Box
      component="section"
      sx={{ backgroundColor: "#0B5384", pt: { xs: 6, sm: 10 }, pb: { xs: 10, sm: 13 } }}
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
          spacing={10}
          mt={{ xs: 6.5, sm: 12 }}
        >
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: "100%",
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
                minHeight: "100%",
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
                  Website Development
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  We craft innovative, responsive websites tailored to your
                  business needs. Our team blends creativity with the latest
                  technologies to build user-friendly, visually appealing, and
                  high-performing websites.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: "100%",
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
                  Wordpress Development
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  We specialize in crafting custom WordPress websites that are
                  fast, secure, and easy to manage. Our team designs and
                  develops responsive sites tailored to your brand, ensuring
                  seamless performance on all devices.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: "100%",
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
                  Ecommerce & Shopify Development
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  We design and develop custom eCommerce solutions that drive
                  sales and elevate your brand. Specializing in Shopify, we
                  create visually stunning, user-friendly online stores
                  optimized for performance and conversion.
                </Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              sx={{
                border: "2px solid #fff",
                minHeight: "100%",
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
                minHeight: "100%",
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
                  MERN Stack Development
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#fff" }}>
                  We build powerful, dynamic web applications using the MERN
                  stack – MongoDB, Express.js, React, and Node.js. Our expertise
                  lies in creating fast, scalable, and secure solutions that
                  deliver exceptional user experiences.
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
