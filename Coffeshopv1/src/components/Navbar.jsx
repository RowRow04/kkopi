import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/Authcontexts";
import logo from "../assets/logo/kkopilogo.png";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white text-black p-7 shadow-md">
      <div className="flex justify-between items-center">
        <div className="ml-9">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link className="hover:text-gray-700" to="/menu">
            Menu
          </Link>
          <Link className="hover:text-gray-700" to="/order-online">
            Order Online
          </Link>
          <Link className="hover:text-gray-700" to="/about-us">
            About Us
          </Link>
          <Link className="hover:text-gray-700" to="/contact">
            Contact
          </Link>
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <Link className="hover:text-gray-700" to="/profile">
                Profile
              </Link>
              <button className="hover:text-gray-700" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="hover:text-gray-700" to="/login">
                Login
              </Link>
              <Link className="hover:text-gray-700" to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
