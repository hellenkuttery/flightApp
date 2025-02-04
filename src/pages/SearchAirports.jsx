import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useFlightCall from "../hooks/useFlightCall";

const SearchAirports = () => {
  const dispatch = useDispatch();
  const {getAirports}=useFlightCall()

  const [formData, setFormData] = useState({
    origin: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  getAirports(formData)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#292828",
        padding: "1rem",
        width: "100%",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 0px 3px #afa9a9",
        margin:"1rem",color:"white"
        // height: "800px",
      }}
    >
      <TextField
        label="Origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Destionation"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
         margin="normal"
        required
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
         margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        MErhaba
      </Button>
    </Box>
  );
};

export default SearchAirports;
