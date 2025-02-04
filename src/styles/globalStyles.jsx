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


  export const gradientBorderCardStyle = {
    display: 'inline-block',
    position: 'relative',
    background: 'transparent',
    padding: '5px', 
    borderRadius: '1rem', 
    backgroundImage: 'linear-gradient(45deg, #282828, #ff585e)', 

    marginTop:"1rem"
  };
  

  export const gradientCardStyle = {
    // display: 'inline-block',
    padding: '20px', // Sayının içindeki alan
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#282828', // Sayının arka planı
    borderRadius: '1rem', // Sayıyı yuvarlak yapmak için
    width: '100%', // Ebeveyn öğesinin genişliği ile uyumlu
    height: '100%', // Ebeveyn öğesinin yüksekliği ile uyumlu
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Sayıyı merkezle
  };


export const borderAnimaiton={
  color: "white",
  padding:"1rem",
  fontSize: "1.2rem",
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-2px",
    width: "100%",
    height: "2px",
    background:
      "linear-gradient(90deg, #8b0303, #464642, #ff7b00, #2e2c2c)", // Renk geçişleri
    backgroundSize: "200% 100%", // Animasyon için genişletiyoruz
    animation: "moveGradient 2s linear infinite",
  },
  "@keyframes moveGradient": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "200% 50%" },
  },
}

  
  

  

  