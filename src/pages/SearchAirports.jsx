import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Typography } from "@mui/material";
import useFlightCall from "./../hooks/useFlightCall";
import { useSelector } from "react-redux";
import { InsertEmoticon } from "@mui/icons-material";
import BasicCard from "../components/BasicCard";

const SimpleMap = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [information, setInformation] = useState();
  const [mapInitialized, setMapInitialized] = useState(false);
  const { getFlights } = useFlightCall();
  const { nearbyAirports, loading, error } = useSelector(
    (state) => state.flight
  );

  console.log(nearbyAirports.data);
  useEffect(() => {
    setMapInitialized(true);
  }, []);

  function MapClick() {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setLocation({ lat, lon: lng });
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      },
    });

    return null;
  }
  useEffect(() => {
    if (location.lat && location.lon) {
      getFlights(location);
    }
  }, [location]);

  return (
    <Box
      style={{
        backgroundColor: "#292828",
        padding: "1rem",
        width: "100%",
        borderRadius: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        boxShadow:"0px 0px 3px #afa9a9"
        // height: "800px",
      }}
    >
      <Box
        style={{
          height: "400px",
          width: "400px",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        {mapInitialized && (
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "100%", width: "100%", borderRadius: "" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MapClick />

            {/* Tıklanan konumu gösteren Marker */}
            {location.lat && location.lon && (
              <Marker position={[location.lat, location.lon]}>
                <Popup>
                  Latitude: {location.lat}, Longitude: {location.lon}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        )}
      </Box>

      <BasicCard />
    </Box>
  );
};

export default SimpleMap;
