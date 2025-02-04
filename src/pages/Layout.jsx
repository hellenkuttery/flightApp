import { Box } from "@mui/material";
import React from "react";
import AppNavbar from "./../components/Navbar";
import Slider from "./../components/Slider";
import Home from '../pages/Home';
import {
  bodyStyle,
  appNavbarStyle,
  containerStyle,
} from "../styles/GlobalStyles";

const Layout = () => {
  return (
    <Box sx={bodyStyle}>
      <Box sx={containerStyle}>
        <Box>
          <AppNavbar />
        </Box>

        <Slider />
        <Home/>
      </Box>
    </Box>
  );
};

export default Layout;
