import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

// Fix for default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapWithMarkers = ({ place, project }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const addMarker = async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
        );
        const { lat, lon } = response.data[0];
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { lat, lon, address: place, project: project },
        ]);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    if (place) {
      addMarker();
    }
  }, [place, project]);

  return (
    <MapContainer
      center={[19.078422674323754, 72.8659786122058]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]}>
          <Popup>
            {marker.project}<br />
            {marker.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;