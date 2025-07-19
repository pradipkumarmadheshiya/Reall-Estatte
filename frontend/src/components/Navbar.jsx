import React from "react";
import { Link, NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
import {Heart} from "lucide-react"

const Navbar = () => {

  const favorites=useSelector((state)=>state.favorite.favorites)
    
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to={"/"} className="text-xl font-bold text-teal-600">ReallEstatte</Link>
          </div>
          <div className="flex space-x-6">
            <NavLink
              to={"/"}
              className={({isActive}) => `px-3 py-2 text-sm rounded-md font-medium transition-colors ${isActive
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to={"/favorites"}
              className={({isActive}) => `relative px-3 py-2 text-sm rounded-md font-medium transition-colors flex items-center ${
                 isActive
                  ? "bg-teal-100 text-teal-700"
                  : "text-gray-700 hover:text-teal-600"
              }`}
            >
              <Heart size={16} className="mr-1" />
              Favorites
              {favorites.length > 0 && (
                <span className="ml-1 bg-teal-500 text-white text-xs rounded-full px-2 py-1 absolute top-0 -right-2">
                  {favorites.length}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
