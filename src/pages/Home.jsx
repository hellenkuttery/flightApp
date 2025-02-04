import React from "react";
import SearchAirports from "./SearchNearbyAirports";
import DraverMap from "./DraverMap";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{display:"flex"}}>
        <SearchAirports />
      </Box>
      {/* <DraverMap/> */}
    </Box>
  );
};

export default Home;
