export const bodyStyle = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  fontFamily: '"Roboto", sans-serif',
  backgroundImage: "url(src/assets/background.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const flexColumn = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};
export const containerStyle = {
  backgroundColor: "primary.main",
  width: "95vw",
  margin: "0 auto",
  padding: "10px 0",
  borderRadius: "10px",
};
export const appNavbarStyle = {
//   marginTop: "0",
//   pasdding: 0,
  //   maxWidth: "1200px",
};

export const sliderStyle = {
  backgroundImage: `radial-gradient(circle, rgba(255, 88, 94,0.4), rgba(40, 40, 40,0.3)), url(src/assets/flight.jpeg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
};

export const btnStyle = {
  backgroundColor:"secondary.main",
//   backgroundImage:"radial-gradient(circle,rgb(255,88,94),rgb(40,40,40))",
  border:"2px solid white",
  color: "white",
  maxWidth: "200px",
  marginTop: "1rem",
//   marginLeft: "1rem",
  borderRadius: "2rem",
};
export const gradientBorderWrapperStyle = {
    display: 'inline-block',
    position: 'relative',
    background: 'transparent',
    padding: '5px', 
    borderRadius: '50%', 
    backgroundImage: 'linear-gradient(45deg, #282828, #ff585e)', 
    width: '100px', 
    height: '100px', 
    marginTop:"1rem"
  };
  
  export const gradientBorderStyle = {
    // display: 'inline-block',
    padding: '20px', // Sayının içindeki alan
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#282828', // Sayının arka planı
    borderRadius: '50%', // Sayıyı yuvarlak yapmak için
    width: '100%', // Ebeveyn öğesinin genişliği ile uyumlu
    height: '100%', // Ebeveyn öğesinin yüksekliği ile uyumlu
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Sayıyı merkezle
  };







  
  

  export const threeDButtonStyle = {
    background: "linear-gradient(145deg, #ff6b6b, #ff585e)", // Hafif degrade efekt
    borderRadius: "25px", // Daha küçük oval yapı
    padding: "6px 14px", // Yanlardan daha az boşluk
    fontSize: "0.9rem", // Daha küçük ve zarif yazı boyutu
    fontWeight: "500", // Aşırı kalın değil, daha ince bir görünüm
    color: "#fff",
    border: "none",
    
    boxShadow: "1px 1px 3px #282828, -1px -1px 3px #ff8585", // Daha hafif 3D gölgeler
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      background: "linear-gradient(145deg, #ff7b7b, #3d3838)", // Hover efekti için daha yumuşak geçiş
      boxShadow: "1px 1px 5px #282828, -1px -1px 5px #ff8585",
      transform: "translateY(1px)", // Daha ince basılma efekti
    },
    "&:active": {
      boxShadow: "inset 1px 1px 3px #282828, inset -1px -1px 3px #ff8585",
      transform: "translateY(2px)", // Butona basılınca içe göçme efekti
    },
   


  };
  