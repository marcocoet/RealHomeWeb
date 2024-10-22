import Family from "../assets/img/Family.jpg";
export default function RentPage() {
  return (
    <div className="rent-page">
      <div className="image-container">
        <img src={MainImage} className="main-image" alt="Main Page" />
      </div>
      <div className="flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center bg-blue-200 ">
        <a href="/home" className="hover:text-gray-300 justify-center">
          Buy
        </a>

        <a href="/rent" className="hover:text-gray-300">
          Rent
        </a>
        <a href="/sell" className="hover:text-black-300">
          Sell
        </a>
      </div>
      <section className="search-bar">
        <input type="text" placeholder="Enter a city, suburb, or area" />
        <button>Search</button>
      </section>
      <section className="filter-type flex justify-center pt-3 gap-2">
        <select id="propertyType">
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="townhouse">Townhouse</option>
          <option value="farm">Farm</option>
        </select>
        <input type="number" placeholder="Minimum price" />
        <input type="number" placeholder="Maximum price" />
        <input type="number" placeholder="Bedrooms" />
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
