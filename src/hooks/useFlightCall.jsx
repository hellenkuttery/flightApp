import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, fetchSuccess } from "../features/flightSlice";

const useFlightCall = () => {
  const [flights, setFlights] = useState([]);
const dispatch=useDispatch()

  const getFlights = async (info) => {
    dispatch(fetchStart())

    const url =
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports?lat=${info.lat}&lng=${info.lon}&locale=en-US`;

    try {
      const { data } = await axios(`${url}`, {
        headers: {
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          "x-rapidapi-key":
            "f6659210a2msh615efac14764667p163f4fjsn7df0c4e3c155",
        },
      });
      dispatch(fetchSuccess(data))
    } catch (error) {
      console.error("API Error:", error);
      dispatch(fetchFail())
    }
  };

  const getAirports = async ({origin,destination,date}) => {
    console.log("info getAirport içinde",origin)
      dispatch(fetchStart())
  
      const url =
        `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport&locale=en-US`;
  
      try {

        await fetch("https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport", {
          method: "POST",
          headers: {
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
            "x-rapidapi-key":
              "f6659210a2msh615efac14764667p163f4fjsn7df0c4e3c155",
          },
         
        });




   
        console.log("API Response:", data);
        dispatch(fetchSuccess(data))
      } catch (error) {
        console.error("API Error:", error);
        dispatch(fetchFail())
      }
    };

  return { getFlights ,getAirports};
};

export default useFlightCall;
