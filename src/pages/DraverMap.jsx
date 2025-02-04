import React, { useState, useEffect } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor: grey[100],
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.default,
  }),
}));

const StyledBox = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled('div')(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
  ...theme.applyStyles('dark', {
    backgroundColor: grey[900],
  }),
}));

function SimpleMap(props) {
  const { window } = props;
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  // Harita üzerinde Marker'a tıklanınca Drawer'ı açıyoruz
  const handleMarkerClick = (lat, lon) => {
    setLocation({ lat, lon });
    toggleDrawer(true)(); // Drawer'ı açıyoruz
  };

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Typography variant="h6">Click on the marker to see details</Typography>
      </Box>

      {/* Leaflet Haritası */}
      <Box sx={{ height: '300px', width: '100%' }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Marker */}
          <Marker position={[51.505, -0.09]} eventHandlers={{ click: () => handleMarkerClick(51.505, -0.09) }}>
            <Popup>Click to see details</Popup>
          </Marker>

          <Marker position={[51.515, -0.1]} eventHandlers={{ click: () => handleMarkerClick(51.515, -0.1) }}>
            <Popup>Click to see details</Popup>
          </Marker>

        </MapContainer>
      </Box>

      {/* Drawer */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>
            Latitude: {location.lat}, Longitude: {location.lon}
          </Typography>

          {/* Kapatma ikonu */}
          <IconButton
            sx={{
              position: 'absolute',
              top: 5,
              right: 5,
            }}
            onClick={toggleDrawer(false)}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </StyledBox>

        <StyledBox sx={{ px: 2, pb: 2, height: '100%', overflow: 'auto' }}>
          {/* Burada sonuçlar yer alacak */}
          <Typography variant="body1" sx={{ p: 2 }}>
            Here are some details for the selected location:
          </Typography>
          <Typography sx={{ p: 2 }}>Additional info about the location goes here.</Typography>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}



export default SimpleMap;
