import Family from "../assets/img/Family.jpg";
import { useSelector } from "react-redux";

export default function RentPage() {
  const { types } = useSelector((state) => state.realEstateTypes);

  return (
    <div className="rent-page">
      <div className="image-container">
        <img src={Family} className="main-image" alt="Main Page" />
      </div>

      <section className="search-bar">
        <input type="text" placeholder="Enter a city, suburb, or area" />
        <button>Search</button>
      </section>
      <section className="filter-type flex justify-center pt-3 gap-2">
        <select>
          <option value="">ALL</option>
          {types.map((type) => (
            <option key={type.Id} value={type.Id}>
              {type.DisplayName}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Minimum price" />
        <input type="number" placeholder="Maximum price" />
        <input type="number" placeholder="Bedrooms" />
      </section>
    </div>
  );
}
