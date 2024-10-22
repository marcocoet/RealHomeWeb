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

      <h2 className="featured-title">Featured Properties</h2>
      <div className="carousel">
        <button className="carousel-control left" onClick={() => moveCarousel(-1)}>
          &lt;
        </button>
        <div className="carousel-inner">
          {displayedProperties.map((property) => (
            <div key={property.id} className="carousel-item">
              <img src={property.image} alt={property.title} className="property-image" />
              <div className="property-info">
                <h3>{property.title}</h3>
                <p>{property.price}</p>
                <p>{property.location}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control right" onClick={() => moveCarousel(1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default HomePage;
