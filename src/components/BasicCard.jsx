import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import {
  gradientBorderCardStyle,
  gradientBorderStyle,
  gradientBorderWrapperStyle,
  gradientCardStyle,borderAnimaiton
} from "../styles/globalStyles";

export default function BasicCard() {
  const { nearbyAirports, loading, error } = useSelector(
    (state) => state.flight
  );

  // if (loading) {
  //   return <p>Yükleniyor...</p>;
  // }

  if (error) {
    return <p>Bir hata oluştu: {error}</p>;
  }

  console.log(nearbyAirports, "Card içindeyim");

  return (
    <Box sx={{ margintTop: "1rem" }}>
      {nearbyAirports?.length > 0 ? (
        <Box sx={gradientBorderCardStyle}>
          <Card sx={{ minWidth: 275 }} style={gradientCardStyle}>
            <CardContent>
              <Typography>Nearby Airports</Typography>
              <Typography gutterBottom sx={{ color: "white", fontSize: 14 }}>
                {nearbyAirports.map((item) => (
                  <Typography
                    gutterBottom
                    sx={borderAnimaiton}
                  >
                    {item.presentation.title}{" "}
                  </Typography>
                ))}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      ) : (
        <Box sx={gradientBorderCardStyle}>
          <Card sx={{ minWidth: 275 }} style={gradientCardStyle}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {nearbyAirports.map((item) => (
                  <Typography>Select a location from map</Typography>
                ))}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </Box>
  );
}
