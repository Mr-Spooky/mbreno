import React, { useState } from 'react';
import {
  MapContainer, TileLayer, Circle, Marker, Popup,
  useMapEvents,
} from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
}

function Map() {
  const center = [46.323616, -0.585414];

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
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
