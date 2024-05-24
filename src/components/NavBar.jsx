import { useState } from 'react';
import logo from '/src/assets/logo.jpg';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (visible) => {
    setShowDropdown(visible);
  };

  return (
    <div>
      <nav className="bg-white py-2 flex gap-48 justify-between px-36 font-sans font-medium ">
        <ul>
          <li>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="site logo"
                className="w-14 mr-2 hover:cursor-pointer "
              />
              <p className="text-2xl font-bold hover:cursor-pointer">eShop</p>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row justify-center items-center gap-2 text-sm text-globalColor5 ">
          <li>
            <Link
              to="/"
              className="pl-3 hover:text-globalColor1 hover:underline hover:underline-offset-8 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className=" pl-3 hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className=" pl-3 hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="pl-3 flex hover:text-globalColor1 hover:underline hover:underline-offset-8"
            >
              Contact
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}
          >
            <span className="cursor-pointer flex items-center m-1 pl-2 hover:text-globalColor1 ">
              <span className=" hover:underline hover:underline-offset-8">
                Account
              </span>
              <KeyboardArrowDownIcon />
            </span>

            {showDropdown && (
              <ul className="absolute left-0 bg-white border shadow-lg w-40">
                <li className="px-4 py-2.5 hover:bg-gray-200 hover:text-globalColor1">
                  <Link to="/my-account">My Account</Link>
                </li>
                <li className="px-4 py-2.5 hover:bg-gray-200 hover:text-globalColor1">
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <ShoppingCartIcon className="cursor-pointer hover:text-globalColor1" />
          </li>
          <li>
            <SearchIcon className="cursor-pointer hover:text-globalColor1 ml-2" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
