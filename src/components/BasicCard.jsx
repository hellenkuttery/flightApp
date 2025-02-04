import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function BasicCard() {
  const { nearbyAirports, loading, error } = useSelector((state) => state.flight);

  // if (loading) {
  //   return <p>Yükleniyor...</p>;
  // }

  if (error) {
    return <p>Bir hata oluştu: {error}</p>;
  }

  console.log(nearbyAirports, "Card içindeyim");


  return (
    <div>
      {
        nearbyAirports?.length > 0 ? (
          <p>Dolu</p>
        ) : (
          <p>Boş</p>
        )
      }
    </div>
  );
}
