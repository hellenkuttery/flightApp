import { createTheme } from '@mui/material/styles';

// Global renk paleti
const theme = createTheme({
  palette: {
    primary: {
      main: '#282828', // Kırmızı ton
    },
    secondary: {
      main: '#282828', // Mavi ton
    },
    background: {
      default: '#fafafa', // Arka plan rengi
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif', // Yazı tipi
    h1: {
      fontSize: '2.5rem', // Başlık 1 stil
    },
    h2: {
      fontSize: '2rem', // Başlık 2 stil
    },
    body1: {
      fontSize: '1rem', // Paragraf yazısı
    },
  },
});

export default theme;
