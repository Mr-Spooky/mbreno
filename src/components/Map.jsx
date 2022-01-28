import React from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';

function Map() {
  const center = [46.33786923543195, -0.5820499184627829];

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom={false}
      style={{
        height: '100%', width: '100%', borderRadius: '15px', zIndex: 0,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} radius={30000} pathOptions={{ fillColor: '#F39200', color: '#F39200' }} />
    </MapContainer>
  );
}

export default Map;
