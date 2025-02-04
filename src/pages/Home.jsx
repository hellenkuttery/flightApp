import React from "react";
import SearchNearbyAirports from "./SearchNearbyAirports";
import DraverMap from "./DraverMap";
import { Box } from "@mui/material";
import SearchAirports from './SearchAirports';

const Home = () => {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Box sx={{display:"flex", flexWrap:"wrap"}}>
        <SearchNearbyAirports />
        <SearchAirports/>

      </Box>
      {/* <DraverMap/> */}
    </Box>
  );
};

export default Home;
