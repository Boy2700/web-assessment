"use client";
import React from "react";
import { Container, Grid2, Box, useTheme, useMediaQuery } from "@mui/material";
import SparForm from "./signComponent/spar-form";
import HeroCover from "./signComponent/hero-cover";

const SignUp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile screens

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p:2,
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid2 container spacing={2} sx={{ height: "100%" }}>
          {/* HeroCover - Hidden on Mobile */}
          {!isMobile && (
           <Grid2  size={{xs:12, sm:6}}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                px:5
                
              }}
            >
              <HeroCover />
            </Grid2>
          )}

          {/* SparForm */}
      
            <Grid2  size={{xs:12, sm:isMobile? 12 : 6}}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px:5
            }}
          >
            <SparForm />
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default SignUp;