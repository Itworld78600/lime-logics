import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { contactBanner, contactImg } from "../components/Images";

function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "280fece8-2caa-46c1-aab2-3f7c6334a2d9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <Box component="section">
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={contactBanner}
          sx={{ maxWidth: "100%" }}
          alt="contact banner"
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "100%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "24px", sm: "40px", md: "50px" },
              fontWeight: 700,
              color: "#3DB0FF",
              textAlign: "center",
            }}
          >
            Let’s Start A Conversation
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#fff",
              textAlign: "center",
            }}
          >
            For any queries and details, feel free to contact us
          </Typography>
        </Box>
      </Box>
      <Container sx={{ py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontSize: { xs: "32px", sm: "45px" },
            fontWeight: 600,
            color: "#151515",
            mb: { xs: 3, sm: 8 },
          }}
        >
          Feel Free To Talk To Us
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2
            size={{
              xs: 12,
              md: 6,
            }}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Box
                component="img"
                sx={{ maxWidth: "100%" }}
                src={contactImg}
                alt="contact img"
              />
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Box component="form" onSubmit={onSubmit}>
                <Box mb={2.5}>
                  <Typography sx={{ fontSize: "18px", mb: 1 }}>
                    Full Name
                  </Typography>
                  <TextField
                    variant="standard"
                    placeholder="Enter your name here"
                    name="fullName"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          paddingLeft: "20px",
                        },
                      },
                    }}
                    sx={{
                      border: "2px solid #1073B7",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "18px",
                      width: "100%",
                      py: 0.9,
                    }}
                  />
                </Box>
                <Box mb={2.5}>
                  <Typography sx={{ fontSize: "18px", mb: 1 }}>
                    Email
                  </Typography>
                  <TextField
                    variant="standard"
                    placeholder="Enter your email here"
                    name="Email"
                    type="email"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          paddingLeft: "20px",
                        },
                      },
                    }}
                    sx={{
                      border: "2px solid #1073B7",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "18px",
                      width: "100%",
                      py: 0.9,
                    }}
                  />
                </Box>
                <Box mb={2.5}>
                  <Typography sx={{ fontSize: "18px", mb: 1 }}>
                    Subject
                  </Typography>
                  <TextField
                    variant="standard"
                    placeholder="Enter your subject here"
                    name="Subject"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          paddingLeft: "20px",
                        },
                      },
                    }}
                    sx={{
                      border: "2px solid #1073B7",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "18px",
                      width: "100%",
                      py: 0.9,
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "18px", mb: 1 }}>
                    Details
                  </Typography>
                  <TextField
                    variant="standard"
                    placeholder="Enter your details here"
                    name="Details"
                    multiline
                    rows={3}
                    slotProps={{
                      input: {
                        disableUnderline: true,
                        sx: {
                          paddingLeft: "20px",
                        },
                      },
                    }}
                    sx={{
                      border: "2px solid #1073B7",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "18px",
                      width: "100%",
                      py: 0.9,
                    }}
                  />
                </Box>
                <Box mt={3.5}>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#0B5384",
                      color: "#fff",
                      borderRadius: "11.42px",
                      fontFamily: "Inter",
                      fontSize: "17.65px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#0B5384",
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box component="section" pt={3}>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.708828430184!2d70.65586517604665!3d28.668435782448405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzA2LjQiTiA3MMKwMzknMzAuNCJF!5e0!3m2!1sen!2s!4v1733755259647!5m2!1sen!2s"
          width={"100%"}
          height={{ xs: "250px", sm: "300px", md: "450px", lg: "600px" }}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}

export default ContactUs;
