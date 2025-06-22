import React, { useEffect, useRef, useState } from "react";
import {
  Heart,
  ShoppingCart,
  User,
  UserRoundPlus,
  X,
  Menu,
  Wind,
  LogOut,
} from "lucide-react";
import categoriesData from "../Data/category";
import productList from "../Data/products";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "./Authentication/utils/auth"; 
import defaultImg from "../assets/products.png";


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
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(``);
  const [selectedCat, setSelectedCat] = useState(`all`);
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navRef.current.classList.add("md:fixed");
      } else {
        navRef.current.classList.remove("md:fixed");
      }
    };

    const current = getCurrentUser();
    setUser(current);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(false);
    navigate("/auth/login");
  };

  const handleSearch = async () => {
    let filteredP = [];

    if (selectedCat.toLowerCase() === "all") {
      filteredP = productList;
    } else {
      filteredP = productList.filter(
        (p) => p.category.toLowerCase() === selectedCat.toLowerCase()
      );
    }

    if (searchTerm.trim() !== "") {
      const searchFiltered = filteredP.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(searchFiltered);
    } else {
      setResults(filteredP);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className=" w-full h-auto bg-[var(--nav)] flex flex-col justify-center items-center shadow-md sticky top-[-2px] z-50 "
      >
        {/* Mobile Toggler */}
        <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap justify-s w-full max-w-[1500px] items-start py-4 gap-y-3 gap-x-4 ">
          {/* Logo */}
          <Link to="/">
            {" "}
            <h1
              onClick={() => {
                setSearchTerm(``);
              }}
              className="text-[var(--brand)] text-2xl md:text-3xl font-bold transition-all duration-300 hover:opacity-80 cursor-pointer sm:text-left w-full sm:w-auto lg:ml-2 ml-4 "
            >
              Digi<span className="text-red-500">mart</span><span className="text-[var(--brand)] font-extrabold">.</span>
            </h1>
          </Link>
          <button
            className="sm:hidden absolute top-5 right-5 z-50 text-[var(--text-color)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className={`w-full flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-evenly items-center gap-y-3 gap-x-4 transition-all duration-300 
            ${isMobileMenuOpen ? "flex" : "hidden"} sm:flex`}
          >
            {/* Search Bar */}
            <div className="flex w-auto h-8 md:h-auto sm:w-auto md:w-1/2 border-2 border-gray-500 rounded-3xl overflow-hidden text-[var(--text-color)]">
              <select
                name="All Categories"
                onChange={(e) => {
                  setSearchTerm(``);
                  setSelectedCat(e.target.value);
                }}
                className=" w-[5.5rem] truncate px-2 bg-transparent text-sm focus:outline-none"
              >
                <option value="All" className="bg-gray-900 text-gray-500">
                  All
                </option>
                {categoriesData.map((cat) => (
                  <option
                    key={cat.id}
                    value={cat.title}
                    className=" bg-gray-900 text-gray-500"
                  >
                    {cat.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onInput={async (e) => {
                  setSearchTerm(e.target.value);
                  await handleSearch();
                }}
                className="flex-1 px-2 py-2 text-sm border-x-2 border-gray-500 focus:outline-none"
              />
              <button
                onClick={() => {
                  handleSearch();
                }}
                className={`px-4 bg-gray-500 text-[var(--nav)] font-semibold text-sm hover:bg-gray-600 transition-all duration-300 `}
              >
                Search
              </button>
            </div>

            {/* search results */}
            <div
              onClick={() => {
                setSearchTerm(``);
              }}
              className={`h-screen w-screen absolute sm:top-40 md:top-40 top-60 lg:top-26.5 left-0 backdrop-blur-sm bg-black/30 transition-all duration-300 ${
                searchTerm === `` ? `hidden` : `block`
              }`}
            >
              <div
                className={`w-[95%] md:w-1/2 bg-white rounded-2xl shadow-xl max-h-80 overflow-y-auto z-50 absolute left-[50vw] translate-x-[-50%] md:translate-x-0 md:left-2 lg:left-[13vw] top-0 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 ${
                  searchTerm === `` ? `hidden` : `block`
                }`}
              >
                {results.length > 0 && searchTerm.trim() !== "" ? (
                  <>
                    <p className="sticky top-0 z-10 p-3 bg-gray-900 text-white text-sm font-semibold uppercase border-b border-gray-700">
                      {`In ${selectedCat}`}
                    </p>
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="flex items-center gap-2 p-3 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200"
                      >
                        <img
                          src={product.image? product.image:defaultImg}
                          alt={product.name}
                          className="w-10 h-10 object-cover rounded"
                        />
                        <p
                          onClick={() => setSearchTerm(``)}
                          className="text-sm font-medium text-gray-800"
                        >
                          {product.name}
                        </p>
                      </Link>
                    ))}
                  </>
                ) : searchTerm.trim() !== "" ? (
                  <p className="px-4 py-3 text-sm text-gray-600">
                    No results found.
                  </p>
                ) : null}
              </div>
            </div>

            {/* Country Selector */}
            <div
              onClick={() => {
                setSearchTerm(``);
              }}
              className="w-[40%] h-[30px] sm:w-auto flex items-center gap-2 text-sm md:text-base bg-transparent border border-gray-300 px-3 py-2 rounded-full shadow-sm hover:shadow-md transition duration-200 "
            >
              <select className="bg-transparent focus:outline-none w-full text-gray-300">
                {countries.map((c, i) => (
                  <option key={i} value={c} className="text-black bg-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Icons and Auth */}
            <div
              onClick={() => {
                setSearchTerm(``);
              }}
              className="flex sm:flex-row justify-between items-center w-full sm:w-auto gap-5 text-[var(--text-color)] text-sm"
            >
              {/* Wishlist & Cart */}
              <div className="flex justify-evenly gap-6 md:gap-3 w-full sm:w-auto">
                <NavLink to={`/wishlist`}>
                  <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-red-500">
                    <Heart className="h-5 w-8" />
                    <span>Wishlist</span>
                  </div>
                </NavLink>

                <NavLink to="/cart">
                  <div className="flex flex-col items-center cursor-pointer transition-all duration-300 hover:text-blue-500">
                    <ShoppingCart className="h-5 w-8" />
                    <span>Cart</span>
                  </div>
                </NavLink>
              </div>

              {user ? (
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex flex-col items-center text-green-400">
                    <NavLink
                      to={`/user`}
                      className="flex flex-col items-center text-green-400"
                    >
                      <User className="h-5 w-5" />
                      <span>{user.name || user.email || "User"}</span>
                    </NavLink>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex flex-col items-center text-red-400 hover:text-red-600 transition-transform hover:scale-105"
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex justify-evenly gap-6 md:gap-3 w-full sm:w-auto">
                  <NavLink to={`/auth/login`}>
                    <button className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:text-green-500">
                      <User className="h-5 w-5" />
                      Login
                    </button>
                  </NavLink>
                  <NavLink to={`/auth/signup`}>
                    <button className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:text-yellow-500">
                      <UserRoundPlus className="h-5 w-5" />
                      SignUp
                    </button>
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional bottom bar */}
        <div
          onClick={() => {
            setSearchTerm(``);
          }}
          className="w-full  h-8 sm:overscroll-contain overflow-y-hidden overflowx-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 bg-gray-800 flex justify-evenly items-center text-white text-xs static overflow-hidden"
        >
          <div className="max-w-[1500px] flex justify-between ">
            <NavLink to={`/`}>
              <span className="cursor-pointer hover:underline md:font-semibold w-auto px-2.5 text-nowrap text-sm md:text-base">
                Home
              </span>
            </NavLink>
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
        </div>
        
      </nav>
    </>
  );
}
