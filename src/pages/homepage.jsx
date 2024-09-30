import Family from "../assets/img/Family.jpg";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/realestatetype/list/"
        );
        const data = await response.json();
        console.log(data);
        const uniqueData = [
          ...new Map(data.map((item) => [item.Id, item])).values(),
        ];
        setTypes(uniqueData);
      } catch (error) {
        console.error("Error fetching real estate types:", error);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div className="homepage">
      <div>
        <img
          src={Family}
          className="w-full rounded shadow hover:opacity-75 h-80 border-collapse"
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

        <input type="number" placeholder="Minimum price" />
        <input type="number" placeholder="Maximum price" />
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
