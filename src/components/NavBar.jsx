import { useState } from 'react';
import logo from '/src/assets/logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (visible) => {
    setShowDropdown(visible);
  };

  return (
    <div>
      <nav className="bg-white p-4 flex gap-48 justify-between px-36 font-sans font-medium">
        <ul>
          <li className="flex items-center">
            <img
              src={logo}
              alt="site logo"
              className="w-14 mr-2 hover:cursor-pointer "
            />
            <p className="text-3xl font-bold hover:cursor-pointer">eShop</p>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              to="/"
              className="hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              Contact
            </Link>
          </li>
          <li
            className="relative "
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <span className="cursor-pointer pb-6 hover:text-globalColor1 hover:underline hover:underline-offset-8">
              Account
            </span>
            {showDropdown && (
              <ul className="absolute left-0 mt-3 bg-white border rounded shadow-lg w-40">
                <li className="px-4 py-3 hover:bg-gray-200 hover:text-globalColor1">
                  <Link to="/my-account">My Account</Link>
                </li>
                <li className="px-4 py-3 hover:bg-gray-200 hover:text-globalColor1">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
