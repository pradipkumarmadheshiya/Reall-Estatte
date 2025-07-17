import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/filterSlice";
import { Filter } from "lucide-react";

const FilterSection = ({ showFilters, setShowFilters }) => {
  const filters = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleSetFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  return (
    <div className="mt-16">
      <div className="container mx-auto px-4 mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden bg-teal-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <Filter size={20} className="mr-2" />
          Filters
        </button>
      </div>
      
      <div
        className={`bg-white p-4 rounded-lg shadow-md mb-6 ${
          showFilters ? "block" : "hidden md:block"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Price (₹)
            </label>
            <input
              type="number"
              value={filters.minPrice}
              onChange={(e) =>
                handleSetFilters({ ...filters, minPrice: e.target.value })
              }
              placeholder="Min Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Price (₹)
            </label>
            <input
              type="number"
              value={filters.maxPrice}
              onChange={(e) =>
                handleSetFilters({ ...filters, maxPrice: e.target.value })
              }
              placeholder="Max Price"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) =>
                handleSetFilters({ ...filters, propertyType: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bedrooms
            </label>
            <select
              value={filters.bedrooms}
              onChange={(e) =>
                handleSetFilters({ ...filters, bedrooms: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">All</option>
              <option value="Studio">Studio</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
              <option value="5BHK">5BHK</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
