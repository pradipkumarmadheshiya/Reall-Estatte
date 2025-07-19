import { Bed, Calendar, ChevronLeft, Heart, MapPin, Phone, Square } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel"
import EnquiryForm from "../components/EnquiryForm"
import { toggleFavorite } from "../store/favoriteSlice";
import {properties} from "../constants/index"

const PropertyDetails = () => {

  const {id}=useParams()
  const favorites=useSelector((state)=>state.favorite.favorites)
  const [showEnquiry, setShowEnquiry] = useState(false);
  
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleToggleFavorite=(propertyId)=>{
    dispatch(toggleFavorite(propertyId))
  }

  const selectedProperty=properties.find((propertiy)=>id==propertiy.id)
  
  if (!selectedProperty) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-teal-600 hover:text-teal-800 mb-6 cursor-pointer"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Properties
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div>
          <ImageCarousel images={selectedProperty.images} />
        </div>

        {/* Property Details */}
        <div>
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-3xl font-bold">{selectedProperty.title}</h1>
            <button
              onClick={() => handleToggleFavorite(selectedProperty.id)}
              className={`p-2 rounded-full cursor-pointer ${
                favorites.includes(selectedProperty.id)
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <Heart
                size={24}
                fill={
                  favorites.includes(selectedProperty.id) ? "white" : "none"
                }
              />
            </button>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">{selectedProperty.location}</span>
          </div>

          <div className="text-3xl font-bold text-teal-600 mb-6">
            {`₹${(selectedProperty.price/100000).toFixed(1)}L`}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Bed size={20} className="mr-2 text-gray-600" />
                <span className="font-semibold">Bedrooms</span>
              </div>
              <span className="text-lg">{selectedProperty.bedrooms}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Square size={20} className="mr-2 text-gray-600" />
                <span className="font-semibold">Area</span>
              </div>
              <span className="text-lg">{selectedProperty.area} sq ft</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {selectedProperty.description}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Amenities</h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedProperty.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-teal-600 rounded-full mr-2"></span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {selectedProperty.yearBuilt && (
            <div className="mb-6">
              <div className="flex items-center text-gray-600">
                <Calendar size={20} className="mr-2" />
                <span>Built in {selectedProperty.yearBuilt}</span>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowEnquiry(true)}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center cursor-pointer"
          >
            <Phone size={20} className="mr-2" />
            Send Enquiry
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">Location</h3>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-2 text-gray-500" />
            <p className="text-sm text-gray-500">
              Location: {selectedProperty.location}
            </p>
          </div>
        </div>
      </div>

      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
    </div>
  );
};

export default PropertyDetails;