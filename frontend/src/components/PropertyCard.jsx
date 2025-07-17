import { Bed, Heart, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleFavorite } from "../store/favoriteSlice";

const PropertyCard = ({ property }) => {

  const dispatch=useDispatch()
  const favorites=useSelector((state)=>state.favorite.favorites)
  const navigate=useNavigate()

  const handleToggleFavorite=(propertyId)=>{
    dispatch(toggleFavorite(propertyId))
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => handleToggleFavorite(property.id)}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            favorites.includes(property.id)
              ? "bg-teal-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          <Heart
            size={20}
            fill={favorites.includes(property.id) ? "white" : "none"}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-teal-600">
            {`₹${(property.price/100000).toFixed(1)}L`}
          </span>
          <div className="flex items-center text-gray-600">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms}</span>
          </div>
        </div>
        <button
          onClick={() => {
            setSelectedProperty(property);
            navigate(`/property/${property.id}`);
          }}
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;