import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function LevelUp() {
  return (
    <Box component="section" sx={{ backgroundColor: "#0B5384", py: 12, mt: 2 }}>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "45px",
              fontWeight: 600,
              color: "#fff",
              textAlign: "center",
              mb: 0.5,
            }}
          >
            Ready to Level Up?
          </Typography>
          <Typography
            sx={{ fontSize: "18px", color: "#fff", textAlign: "center", mb: 4 }}
          >
            Apply today to be considered for our upcoming start dates.
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button
              href="#"
              sx={{
                backgroundColor: "#212121",
                fontSize: "19px",
                px: 4,
                textTransform: "capitalize",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default LevelUp;
