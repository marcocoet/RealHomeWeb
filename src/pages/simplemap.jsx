import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LeafletControlGeocoder from "../common/LeafletControllGecoder";

const SimpleMap = () => {
  const mapRef = useRef(null);
  const latitude = -33.2278;
  const longitude = 21.8569;

  //const latitude = -34.16143035;
  //const longitude = 18.871019230148693;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={5}
      ref={mapRef}
      style={{ height: "60vh", width: "60vw" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LeafletControlGeocoder />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default SimpleMap;
