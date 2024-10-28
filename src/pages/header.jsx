import { Link } from "react-router-dom";
import HomeLogo from "../assets/img/real-home-logo.jpg";
import "./styles/Header.css"; // Update the import path for Header.css
import { useEffect } from "react";
import { listRealEstateTypes } from "../reducers/realestatetypes.reducer";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.realEstateTypes);

  useEffect(() => {
    dispatch(listRealEstateTypes());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <header className="header flex flex-col justify-between gap-2 pb-4 pt-2 md:flex-row md:items-center">
        <div className="logo-container flex flex-row">
          <a href="/">
            <img
              className="logo h-10 w-10 rounded-full"
              src={HomeLogo}
              alt="RealHome Logo"
            />
          </a>
          <h1 className="company-name ml-2 mb-0 self-center text-lg text-primary-green-500">
            Real Home
          </h1>
        </div>
        <nav className="nav-menu flex space-x-4">
          <a href="/Login" className="nav-link font-medium">
            Sign In
          </a>
          <a href="/Signup" className="nav-link font-medium">
            Sign Up
          </a>
          <a href="/agents" className="nav-link font-medium">
            Agent Profiles
          </a>
          <a href="/favorites" className="nav-link font-medium">
            Favorites/Wishlist
          </a>
          <div className="properties-dropdown relative inline-block text-left">
            <div>
              <button className="properties-button inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                Properties
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.17l3.71-2.96a.75.75 0 111.06 1.12l-4.25 3.33a.75.75 0 01-1 0l-4.25-3.33a.75.75 0 010-1.12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div className="dropdown-menu absolute hidden bg-white border border-gray-200 mt-1 rounded-md shadow-lg z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <a
                  href="/rent"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Rent
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Buy
                </a>
                <Link
                  to={{
                    pathname: "/sell",
                    state: { prevPath: location.pathname },
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                ></Link>
                <a
                  href="/sell"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Sell
                </a>
              </div>
            </div>
          </div>
          <div className="menu-icon">
            <i className="fa fa-bars"></i>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
