import MapPinIcon from "../assets/icons/map-pin.svg";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder";

function LeafletControlGeocoder() {
  const map = useMap();

  useEffect(() => {
    const geocoder = new L.Control.Geocoder({
      defaultUseGeocoder: true,
      serviceUrl: "https://nominatim.openstreetmap.org/search",
      
      query: "",
      placeholder: "Search here...",
      defaultMarkGeocode: false,
    })

    // L.control.geocoder({
    //   query: "",
    //   placeholder: "Search here...",
    //   defaultMarkGeocode: false,
    //   geocoder,
    // })
      .on("markgeocode", function (e) {
        // const pos = { lat: e.geocode.center.lat, lng: e.geocode.center.lng }

        const latlng = e.geocode.center;
        L.marker(latlng, { MapPinIcon })
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map); 

  }, [map]);

return null;
}
export default LeafletControlGeocoder