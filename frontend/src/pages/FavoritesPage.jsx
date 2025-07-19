import { Heart } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {

  const favorites=useSelector((state)=>state.favorite.favorites)
  const navigate=useNavigate()
  
  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Favorites ({favoriteProperties.length})</h1>
        
      {favoriteProperties.length === 0 ? (
        <div className="text-center py-12">
          <Heart size={64} className="mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No favorites yet
          </h3>
          <p className="text-gray-500 mb-6">
            Start adding properties to your favorites!
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-teal-600 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
          >
            Browse Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
