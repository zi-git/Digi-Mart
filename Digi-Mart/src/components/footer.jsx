import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import categoriesData from "../Data/category";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6 md:px-12 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Digimart</h3>
          <p className="text-sm text-gray-400">
            Your one-stop destination for electronics, footwear, and essentials.
            Shop smart. Live smarter.
          </p>
          <div className="flex space-x-4 mt-4 text-white text-xl">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            {categoriesData.map((c) => {
              return (
                <NavLink to={`/category/${c.id}`} key={c.id}>
                  <li>
                    {c.title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-3">
            Get exclusive deals & offers in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Digimart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
