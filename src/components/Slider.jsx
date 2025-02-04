import { Box, Button } from "@mui/material";
import React from "react";
import flight from "../assets/flight.jpeg";
import { btnStyle, gradientBorderStyle, gradientBorderWrapperStyle, sliderStyle, threeDButtonStyle } from "../styles/GlobalStyles";
import { Typography } from "@mui/material";
const Slider = () => {
  return (
    <Box sx={sliderStyle}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          padding: "2rem",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
          <Typography>Get Nearby Airports</Typography>
          <Typography sx={{ width: "70%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            dolores cumque ad non eaque. Veritatis autem aliquam laudantium
            iusto ipsum!
          </Typography>
          <Button variant="contained" sx={threeDButtonStyle}>
            Reservation
          </Button>
          <Button variant="contained" sx={btnStyle}>
            Air force
          </Button>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent: "flex-end", alignItems: "flex-end"}}>
        <Box style={gradientBorderWrapperStyle}>
          <Box style={gradientBorderStyle}>922</Box>
        </Box>
        <Box style={gradientBorderWrapperStyle}>
          <Box style={gradientBorderStyle}>24</Box>
        </Box>
        </Box>
     
      </Box>
    </Box>
  );
};

export default Slider;
