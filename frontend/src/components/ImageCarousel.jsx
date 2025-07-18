import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const ImageCarousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img
        src={images[currentIndex]}
        alt={`Property ${currentIndex + 1}`}
        className="w-full h-96 object-cover rounded-lg"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-300" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel