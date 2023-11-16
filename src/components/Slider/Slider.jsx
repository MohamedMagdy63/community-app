import React, { useState } from 'react';
import './Slider.css'; // You can create a CSS file for styling

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <button className="prev" onClick={prevSlide}>
          <img src="https://image.flaticon.com/icons/png/512/271/271228.png" alt="Previous" />
        </button>
        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <button className="next" onClick={nextSlide}>
          <img src="https://image.flaticon.com/icons/png/512/271/271220.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
