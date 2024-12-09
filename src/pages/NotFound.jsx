import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function NotFound() {
  return (
    <Box component="section">
      <Container sx={{ minHeight: "50vh", position: "relative" }}>
        <Box
          sx={{
            maxWidth: "500px",
            textAlign: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#0B5384",
              fontSize: { xs: "36px", md: "108px", fontWeight: 700 },
            }}
          >
            Oops!
          </Typography>
          <Typography
            sx={{ my: 1.5, fontSize: "20px", textTransform: "uppercase" }}
          >
            404 - page not found
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            The page you are trying to access may have been removed, renamed, or
            is temporarily unavailable.
          </Typography>
          <Box mt={3.5}>
            <Button
              variant="contained"
              href="/contact-us"
              sx={{
                backgroundColor: "#0B5384",
                color: "#fff",
                borderRadius: "11.42px",
                fontFamily: "Inter",
                fontSize: "17.65px",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: "#0B5384",
                },
              }}
            >
              Go to homepage
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default NotFound;
