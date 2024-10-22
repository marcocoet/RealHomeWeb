import Family from "../assets/img/Family.jpg";
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
      <div>
        <img
          src={Family}
          className="w-full rounded shadow  h-80 border-collapse"
          alt="Your dream house"
        ></img>
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

      <section className="properties-for-sale bg-blue-200">
        <h1 className="ml-2 mb-0 self-center text-lg text-primary-green-500">
          Properties for Sale in the Western Cape
        </h1>
        <div className="flex justify-center gap-2 pb-4 pt-2">
          <a href="/buypage">
            <button>Bellville</button>
          </a>
          <a href="/buypage">
            <button>Cape Town</button>
          </a>
        </div>
        <div className="flex justify-center gap-2 pb-4 pt-2">
          <a href="/buypage">
            <button>Durbanville</button>
          </a>
          <a href="/buypage">
            <button>Hermanus</button>
          </a>
        </div>
        <div className="flex justify-center gap-2 pb-4 pt-2">
          <a href="/buypage">
            <button>Paarl</button>
          </a>
          <a href="/buypage">
            <button>Stellenbosch</button>
          </a>
        </div>
        <div className="flex justify-center gap-2 pb-4 pt-2">
          <a href="/buypage">
            <button>Summerset West</button>
          </a>
          <a href="/buypage">
            <button>George</button>
          </a>
        </div>
      </section>
    </div>
  );
}
