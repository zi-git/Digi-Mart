import React, { useEffect, useRef, useState } from "react";
import {
  Heart,
  ShoppingCart,
  User,
  UserRoundPlus,
  X,
  Menu,
} from "lucide-react";
import categoriesData from "../Data/category";
import { NavLink,Link } from "react-router-dom";

export default function Navbar() {
  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Korea",
    "Italy",
    "Spain",
    "Mexico",
    "Netherlands",
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add("md:fixed");
      } else {
        navRef.current.classList.remove("md:fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className=" w-full h-auto bg-[var(--nav)] flex flex-col justify-center items-center shadow-md sticky top-0 z-50 "
      >
        {/* Mobile Toggler */}
        <button
          className="sm:hidden absolute top-5 right-5 z-50 text-[var(--text-color)]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between w-full max-w-[1500px] items-center py-4 gap-y-3 gap-x-4 ">
          {/* Logo */}
          <Link to="/">
            {" "}
            <h1 className="text-[var(--brand)] text-2xl md:text-3xl font-bold transition-all duration-300 hover:opacity-80 cursor-pointer sm:text-left w-full sm:w-auto md:m-0 ml-3.5">
              Digimart<span className="text-red-500 font-extrabold">.</span>
            </h1>
          </Link>

          <div
            className={`w-full flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-evenly items-center gap-y-3 gap-x-4 transition-all duration-300 
            ${isMobileMenuOpen ? "flex" : "hidden"} sm:flex`}
          >
            {/* Search Bar */}
            <div className="flex w-[80%] h-8 md:h-auto sm:w-auto md:w-1/2 border-2 border-gray-500 rounded-3xl overflow-hidden text-[var(--text-color)]">
              <select
                name="All Categories"
                className="px-2 bg-transparent text-sm focus:outline-none"
              >
                <option value="All">All</option>
              </select>
              <input
                type="text"
                placeholder="Search here"
                className="flex-1 px-2 py-2 text-sm border-x-2 border-gray-500 focus:outline-none"
              />
              <button className="px-4 bg-gray-500 text-[var(--nav)] font-semibold text-sm hover:bg-gray-600 transition-all duration-300">
                Search
              </button>
            </div>

            {/* Country Selector */}
            <div className="w-[40%] h-[30px] sm:w-auto flex items-center gap-2 text-sm md:text-base bg-transparent border border-gray-300 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition duration-200 ">
              <select className="bg-transparent focus:outline-none w-full text-gray-300">
                {countries.map((c, i) => (
                  <option key={i} value={c} className="text-black bg-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Icons and Auth */}
            <div className="flex sm:flex-row justify-between items-center w-full sm:w-auto gap-5 text-[var(--text-color)] text-sm">
              {/* Wishlist & Cart */}
              <div className="flex justify-evenly gap-6 md:gap-3 w-full sm:w-auto">
                <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-red-500">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </div>
                <NavLink to="/cart">
                  <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart</span>
                  </div>
                </NavLink>
              </div>

              {/* Auth Buttons */}
              <div className="flex justify-evenly gap-6 md:md:gap-3 w-full sm:w-auto">
                <button className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:text-green-500">
                  <User className="h-5 w-5" />
                  Login
                </button>
                <button className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:text-yellow-500">
                  <UserRoundPlus className="h-5 w-5" />
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional bottom bar */}
        <div className="w-full h-8 sm:overflow-auto overflow-scroll bg-gray-700 md:px-50 flex md:justify-between items-center text-white text-xs static">
          {categoriesData.map((c) => {
            return (
              <NavLink key={c.id} to={`/category/${c.id}`}>
                {" "}
                <span
                  key={c.id}
                  className="cursor-pointer hover:underline md:font-semibold w-auto px-2.5 text-nowrap text-sm md:text-base"
                >
                  {c.title}
                </span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}
