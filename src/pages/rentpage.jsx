import Family from "../assets/img/Family.jpg";

export default function rentpage() {
  return (
    <div className="rent-page">
      <div>
        <img
          src={Family}
          className="w-full rounded shadow hover:opacity-75 h-80 border-collapse"
          alt="Your dream house"
        />
      </div>
      <div className="nav-links flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center bg-blue-200">
        <a href="/home" className="nav-item hover:text-gray-300">
          Buy
        </a>
        <a href="/rent" className="nav-item hover:text-gray-300">
          Rent
        </a>
        <a href="/sell" className="nav-item hover:text-gray-300">
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
        <input type="number" placeholder="Min price" />
        <input type="number" placeholder="Max price" />
        <input type="number" placeholder="Bedrooms" />
      </section>

      <section className="properties-for-rent bg-blue-200">
        <h1 className="ml-2 mb-0 self-center text-lg text-primary-green-500">
          Properties for Rent in the Western Cape
        </h1>
        <div className="flex justify-center gap-2 pb-4 pt-2">
          {['Bellville', 'Cape Town', 'Durbanville', 'Hermanus', 'Paarl', 'Stellenbosch', 'Somerset West', 'George'].map(city => (
            <a href="/rentpage" key={city}>
              <button>{city}</button>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
