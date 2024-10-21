import { useState, useEffect } from 'react';
import './styles/HomePage.css';
import mainImage from './images/mainpage1.jpg';
import modernApartmentImage from './images/modernapt1.jpg';
import suburbanHouseImage from './images/Suburban House1.jpg';
import downtownLoftImage from './images/Downtown Loft.jpg';
import beachHouseImage from './images/Beach House.jpg';
import mountainCabinImage from './images/Mountain Cabin1.jpg';
import luxuryBeachfrontVillaImage from './images/Luxury Beachfront Villa1.jpg';
import spaciousFamilyHomeImage from './images/Spacious Family Home1.jpg';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const dummyProperties = [
      {
        id: 1,
        title: "Modern Apartment",
        price: "$280,000",
        location: "New York",
        image: modernApartmentImage
      },
      {
        id: 2,
        title: "Suburban House",
        price: "$350,000",
        location: "Los Angeles",
        image: suburbanHouseImage
      },
      {
        id: 3,
        title: "Downtown Loft",
        price: "$220,000",
        location: "Chicago",
        image: downtownLoftImage
      },
      {
        id: 4,
        title: "Beach House",
        price: "$500,000",
        location: "Miami",
        image: beachHouseImage
      },
      {
        id: 5,
        title: "Mountain Cabin",
        price: "$180,000",
        location: "Denver",
        image: mountainCabinImage
      },
      {
        id: 6,
        title: "Luxury Beachfront Villa",
        price: "$1,200,000",
        location: "Bahamas",
        image: luxuryBeachfrontVillaImage
      },
      {
        id: 7,
        title: "Spacious Family Home",
        price: "$600,000",
        location: "San Francisco",
        image: spaciousFamilyHomeImage
      },
    ];
    setProperties(dummyProperties);
  }, []);

  const moveCarousel = (direction) => {
    const totalProperties = properties.length;
    const itemsToShow = 3;
    const maxIndex = Math.ceil(totalProperties / itemsToShow) - 1;

    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) {
        newIndex = maxIndex;
      } else if (newIndex > maxIndex) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div className="homepage">
      <header>
        <nav className="menu">
          {/* Navigation links removed */}
        </nav>
      </header>

      <div className="hero-image">
        <img src={mainImage} alt="Welcome to Realhome" className="hero-img" />
        <div className="overlay">
          <h1>Welcome to Realhome</h1>
          <p>Find your dream property with us!</p>
        </div>
      </div>

      <h2 className="featured-title">Featured Properties</h2>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {properties.map((property) => (
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
        <button className="carousel-control left" onClick={() => moveCarousel(-1)}>
          &lt;
        </button>
        <button className="carousel-control right" onClick={() => moveCarousel(1)}>
          &gt;
        </button>
      </div>

      <footer>
        <p>&copy; 2023 Realhome. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
