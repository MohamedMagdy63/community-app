import React from 'react';
import Slider from '../Slider/Slider';
import './MainBox.css'; // Create a CSS file for styling

const MainBox = ({ images, serviceName, description }) => {
  return (
    <div className="service-box">
      <div className="service-info">
        <h2>{serviceName}</h2>
        <p>{description}</p>
      </div>
      <Slider images={images} />
    </div>
  );
};

export default MainBox;

