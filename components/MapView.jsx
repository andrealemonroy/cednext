import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MarkerIcon = dynamic(
  () => import("./react-leaflet-icon.js").then((mod) => mod.MarkerIcon),
  {
    ssr: false,
  }
);

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);

const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const MapView = ({ datos, nombre }) => {
  const latitud = datos.latitud;
  const longitud = datos.longitud;
  const position = [latitud, longitud];
  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {nombre} <br />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
