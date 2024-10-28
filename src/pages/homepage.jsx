import { useSelector } from "react-redux";
import "./styles/HomePage.css";

export default function HomePage() {
  const { types } = useSelector((state) => state.realEstateTypes);

  return (
    <div className="homepage">
      <section className="search-bar">
        <input type="text" placeholder="Enter a city, suburb, or area" />
        <button>Search</button>
      </section>

      <section>
        <select>
          <option value="">ALL</option>
          {types.map((type) => (
            <option key={type.Id} value={type.Id}>
              {type.DisplayName}
            </option>
          ))}
        </select>

        <input type="number" placeholder="Price Range" />

        <input type="number" placeholder="Bedrooms" />
      </section>

      <h2 className="featured-title">Featured Properties</h2>
    </div>
  );
}
