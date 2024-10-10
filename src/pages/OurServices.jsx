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
            }}
          >
            FULL-CYCLE SERVICES FOR YOUR NEEDS
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
                  We have dedicated professional graphic designing resources
                  on-board. They are incredibly talented in turning ideas into
                  creative pictorial and visual designs. In addition, crafting
                  website templates
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
                  We have years of experience in developing top-class sites that
                  have the potential to directly appeal to the targeted market,
                  turning the visitors into potential customers.
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
                  We have a highly-skilled mobile application development team,
                  and they possess the skills to bring life to the most complex
                  and technical scenarios.
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
                  Our certified Game Developers possess the skills to create
                  games from scratch. They are well-versed in the current gaming
                  trends. Our team specializes in crafting full-motion and
                  rendering animations.
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
                  We are proud to be industry pioneers and have incepted several
                  web platforms to serve users' needs. We are well-versed in the
                  marketing trends, which is why smallseotools.
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
                  With years of experience, we have laid the foundation of
                  several applications and games that have garnered millions of
                  downloads. In the domain of designing
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
                  Our content writing team possesses immense skills. They know
                  how to transform ideas and thoughts into words. Our writers
                  are well-versed in the distinguishing
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
                  Our Quality Assurance team tests all of our products and
                  projects ruthlessly. They deploy different scenarios for the
                  fixation of bugs and functionality ends.
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
                  We are well-established publishers and offering services for
                  Amazon Kindle Direct Publishing. Our library is growing over
                  the years, with more than 200 quality books to cater to
                  readers' cravings worldwide.
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
