import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  MapContainer, TileLayer, Circle, Marker, Popup, useMapEvents,
} from 'react-leaflet';
import { divIcon } from 'leaflet';
import './marker.css';

const iconMarkup = renderToStaticMarkup(
  <i className=" fa fa-map-marker-alt fa-3x" />,
);

const customMarkerIcon = divIcon({
  html: iconMarkup,
  iconSize: [26, 35],
  iconAnchor: [15, 35],
  popupAnchor: [-2, -35],
});

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
    <Marker position={position} icon={customMarkerIcon}>
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
