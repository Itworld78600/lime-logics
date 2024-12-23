import {
  Box,
  Button,
  Container,
  Grid2,
  Typography,
  TextField,
} from "@mui/material";
import React from "react";
import { whiteLogo } from "./Images";
import { Link } from "react-router-dom";

const listItemStyles = {
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "8px",
    left: "-20px",
    backgroundColor: "#1073B7",
    height: "9.18px",
    width: "9.18px",
    borderRadius: "50%",
  },
};

const linkStyles = {
  textDecoration: "none",
  color: "#fff",
  fontSize: "13.77px",
};

const sections = [
  {
    title: "Company",
    items: ["Courses", "Blog", "Community", "About"],
    links: ["/#our-courses", "/#blog", "/#community", "/#about"],
  },
  {
    title: "Courses",
    items: [
      "Data Science",
      "Machine and Deep Learning",
      "Cloud Computing",
      "Business Intelligence",
      "Blockchain",
      "Digital Marketing & SEO",
      "Graphics & UIUX",
      "Embedding & IOT",
    ],
    links: [
      "/#Data-Science",
      "/#Machine-and-Deep-Learning",
      "/#Cloud-Computing",
      "/#Business-Intelligence",
      "/#Blockchain",
      "/#Digital-Marketing-SEO",
      "/#Graphics-UIUX",
      "/#Embedding-IOT",
    ],
  },
];

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box component="section" sx={{ backgroundColor: "#000", py: 3 }}>
      <Container maxWidth="xl">
        <Grid2 container spacing={{ xs: 3, lg: 10 }} py={5}>
          <Grid2 size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box
              component="img"
              sx={{ maxWidth: "250px" }}
              src={whiteLogo}
              alt="logo"
            />
            <Typography
              sx={{ fontSize: "13.77px", color: "#fff", my: 1.5, mb: 4.5 }}
            >
              At LimeLogics, we blend innovation with cutting-edge technology to
              deliver exceptional software solutions and web development
              services. Our team of experts is dedicated to transforming ideas
              into powerful digital products that drive business growth and
              success.
            </Typography>
            <Link
              variant="contained"
              to="/contact-us"
              style={{
                backgroundColor: "#0B5384",
                color: "#fff",
                borderRadius: "5px",
                fontFamily: "Inter",
                fontSize: "17.65px",
                textTransform: "capitalize",
                textDecoration: "none",
                padding: "11px 19px",
                marginTop: "12px",
                "&:hover": {
                  backgroundColor: "#0B5384",
                },
              }}
            >
              Contact Us
            </Link>
          </Grid2>
          {sections.map((section, index) => (
            <Grid2 size={{ xs: 12, sm: 6, lg: index == 0 ? 2 : 3 }} key={index}>
              <Typography
                sx={{ fontSize: "26px", fontWeight: 600, color: "#fff" }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ pl: 3.25, listStyle: "none", mb: 0 }}>
                {section.items.map((item, idx) => (
                  <Box component="li" sx={listItemStyles} key={idx}>
                    <Box
                      component="a"
                      href={section.links[idx]}
                      sx={linkStyles}
                    >
                      {item}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid2>
          ))}
          <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              sx={{ fontSize: "26px", fontWeight: 600, color: "#fff" }}
            >
              Newsletter
            </Typography>
            <Typography sx={{ fontSize: "13.77px", color: "#fff", mt: 2.15 }}>
              Subscribe to our newsletter and stay Updated
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "2px solid #1073B7",
                borderRadius: "10px",
                p: "5px",
                maxWidth: "360px",
                backgroundColor: "#000",
                mt: 3,
              }}
            >
              <TextField
                variant="standard"
                placeholder="Enter your email here"
                slotProps={{
                  input: {
                    disableUnderline: true,
                    sx: {
                      color: "#fff",
                      paddingLeft: "10px",
                    },
                  },
                }}
                sx={{
                  flexGrow: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "10px",
                  textTransform: "none",
                  px: 3,
                  py: 1.15,
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid2>
        </Grid2>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "13.77px",
              color: "#fff",
              mt: 3,
              mb: 1,
            }}
          >
            Copyright © {year} LimeLogics All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
