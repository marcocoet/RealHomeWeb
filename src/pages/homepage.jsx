import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstateTypes } from "../reducers/realestatetypes.reducer";

export default function HomePage() {
  const dispatch = useDispatch();
  const { loading, types, error } = useSelector(
    (state) => state.realEstateTypes
  );

  useEffect(() => {
    dispatch(fetchRealEstateTypes());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="homepage">
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
