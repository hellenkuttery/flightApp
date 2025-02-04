import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
    <div>
      {nearbyAirports?.length > 0 ? (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {nearbyAirports.map((item) => (
                <Typography>{item.presentation.title}</Typography>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ) : (
        <p>Boş</p>
      )}
    </div>
  );
}
