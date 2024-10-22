import Family from "../assets/img/Family.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRealEstateTypes } from "../reducers/realestatetypes.reducer";
export default function RentPage() {
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
    <div className="rent-page">
      <div className="image-container">
        <img src={Family} className="main-image" alt="Main Page" />
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
