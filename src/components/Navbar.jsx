import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        {["Home", "Doctors", "About", "Contact"].map((item, index) => (
          <NavLink key={index} to={`/${item.toLowerCase()}`} className="group">
            <li className="py-1">{item}</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden group-hover:block" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer">
            <img className="w-10 h-10 rounded-full" src={assets.profile_pic} alt="Profile" />
            <img className="w-5" src={assets.dropdown_icon} alt="Dropdown" />
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-6 py-2 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;