import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import FilterSection from "../components/FilterSection";
import { useSelector } from "react-redux";
import PropertyCard from "../components/PropertyCard"
import {properties} from "../constants/index"

const Home = () => {
  const [selectedproperty, setSelectedProperty] = useState(null);
  const filters = useSelector((state) => state.filter);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties=properties.filter((property)=>{
    const matchesMinPrice=!filters.minPrice || property.price>=parseInt(filters.minPrice)
    const matchesMaxPrice=!filters.maxPrice || property.price<=parseInt(filters.maxPrice)
    const matchesType=!filters.propertyType || property.type===filters.propertyType
    const matchesBedrooms=!filters.bedrooms || property.bedrooms===filters.bedrooms

    return matchesMinPrice && matchesMaxPrice && matchesType && matchesBedrooms
  })

  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4">
        <FilterSection
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">
            Properties
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-22">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
