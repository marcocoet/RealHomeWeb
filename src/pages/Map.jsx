import { useEffect, useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";

const Map = ({ minPrice, maxPrice, propertyType }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
      setMap(map);
    };

    if (window.google) {
      loadMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB4VBARGIe2n3G3cX6Y8IT6_qxjZUveuaM&libraries=places`;
      script.onload = loadMap;
      document.body.appendChild(script);
    }
  }, []);

  const handleSearch = () => {
    if (!map) return; // Prevent searching if map is not loaded
    const service = new window.google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(
      { query: searchQuery, fields: ["name", "geometry"] },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results[0]) {
          const { geometry } = results[0];
          map.setCenter(geometry.location);
          new window.google.maps.Marker({
            position: geometry.location,
            map: map,
          });
        }
      }
    );
  };

  // Function to update markers based on filters
  const updateMarkers = useCallback(() => {
    const properties = [
      { name: "Property 1", price: 500000, lat: -34.397, lng: 150.644, type: "house" },
      { name: "Property 2", price: 800000, lat: -34.407, lng: 150.654, type: "apartment" },
      // ... Add more properties as needed
    ];

    const filteredProperties = properties.filter(property => {
      return property.price >= minPrice && property.price <= maxPrice && property.type === propertyType;
    });

    // Clear previous markers
    map?.markers?.forEach(marker => marker.setMap(null));

    // Create new markers
    const markers = filteredProperties.map(property => {
      const marker = new window.google.maps.Marker({
        position: { lat: property.lat, lng: property.lng },
        map: map,
        title: property.name,
      });
      return marker;
    });

    // Save markers to the map instance for easy removal later
    if (map) map.markers = markers;
  }, [minPrice, maxPrice, propertyType, map]); // Include dependencies

  useEffect(() => {
    if (map) {
      updateMarkers(); // Update markers whenever filters change
    }
  }, [map, updateMarkers]); // Update dependency array

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for places"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", marginTop: "20px" }}
      ></div>
    </div>
  );
};

// Prop validation
Map.propTypes = {
  minPrice: PropTypes.number.isRequired,
  maxPrice: PropTypes.number.isRequired,
  propertyType: PropTypes.string.isRequired,
};

export default Map;
