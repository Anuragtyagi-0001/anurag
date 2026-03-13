import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const WeatherMap = ({ lat, lon, city }) => {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      style={{ height: "400px", width: "100%", marginTop: "20px" }}
    >
      <TileLayer
        attribution='© OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default WeatherMap;