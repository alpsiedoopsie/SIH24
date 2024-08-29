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

const MapWithMarkers = ({ place, project, lat, lon }) => {
  const [markers, setMarkers] = useState([]);
  const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API key

  useEffect(() => {
    const addMarker = async () => {
      if (lat && lon) {
        // Use the provided latitude and longitude
        setMarkers((prevMarkers) => [
          ...prevMarkers,
          { lat, lon, address: place, project: project },
        ]);
      } else if (place) {
        // Geocode the place if latitude and longitude are not provided
        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json`,
            {
              params: {
                q: place,
                key: apiKey,
              },
            }
          );

          if (response.data.results && response.data.results.length > 0) {
            const { lat, lng } = response.data.results[0].geometry;
            setMarkers((prevMarkers) => [
              ...prevMarkers,
              { lat, lon: lng, address: place, project: project },
            ]);
          } else {
            console.error("No location data found for the specified place.");
          }
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      }
    };

    addMarker();
  }, [place, project, lat, lon, apiKey]);

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
            <strong>{marker.project}</strong><br />
            {marker.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
