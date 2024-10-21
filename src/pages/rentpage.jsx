import { useState } from "react";
import Map from "./Map"; // Adjusted import path
import MainImage from "./images/mainpage1.jpg"; // Updated image path
import './styles/rentpage.css'; // Ensure the path to your CSS file is correct

export default function RentPage() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [propertyType, setPropertyType] = useState("house");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters

  return (
    <div className="rent-page">
      <div className="image-container">
        <img src={MainImage} className="main-image" alt="Main Page" />
      </div>

      <section className="filter-section flex justify-center pt-3">
        <button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}>
          {showFilters ? "Less Filters" : "More Filters"}
        </button>

        {showFilters && (
          <div className="filter-options">
            <div className="filter-group">
              <label>Property Type:</label>
              <select
                id="propertyType"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="filter-select"
              >
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="farm">Farm</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Min Price:</label>
              <input
                type="range"
                min="0"
                max={maxPrice}
                step="25000"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="slider"
              />
              <span>R{minPrice.toLocaleString()}</span>
            </div>

            <div className="filter-group">
              <label>Max Price:</label>
              <input
                type="range"
                min={minPrice}
                max="1000000"
                step="25000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="slider"
              />
              <span>R{maxPrice.toLocaleString()}</span>
            </div>

            <div className="filter-group">
              <label>Bedrooms:</label>
              <select className="filter-select">
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Bathrooms:</label>
              <select className="filter-select">
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Parking / Garage:</label>
              <select className="filter-select">
                <option value="">Any</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Furnished:</label>
              <select className="filter-select">
                <option value="">Any</option>
                <option value="furnished">Furnished</option>
                <option value="unfurnished">Unfurnished</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Move-in Date:</label>
              <input type="date" className="filter-select" />
            </div>

            <div className="filter-group">
              <label>Rental Term:</label>
              <select className="filter-select">
                <option value="">Any</option>
                <option value="short-term">Short Term</option>
                <option value="long-term">Long Term</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Features:</label>
              <div className="checkbox-group">
                <label><input type="checkbox" /> Pet Friendly</label>
                <label><input type="checkbox" /> Garden</label>
                <label><input type="checkbox" /> Pool</label>
                <label><input type="checkbox" /> Flatlet</label>
                <label><input type="checkbox" /> Other</label>
                <label><input type="checkbox" /> Retirement</label>
                <label><input type="checkbox" /> On Show</label>
                <label><input type="checkbox" /> Security Estate / Cluster</label>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* This is the functional search bar */}
      <section className="map-search-bar flex justify-center pt-4">
        <input
          type="text"
          placeholder="Search for places"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className="search-input"
        />
        <button className="search-button">Search</button>
      </section>

      <Map 
        minPrice={minPrice} 
        maxPrice={maxPrice} 
        propertyType={propertyType} 
        searchTerm={searchTerm} // Pass search term to Map component if needed
      />
    </div>
  );
}
