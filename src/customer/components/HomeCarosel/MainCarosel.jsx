// src/customer/components/HomeCarosel/MainCarosel.js
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData'; // Correct path

const MainCarosel = () => {
  const items = mainCarouselData.map((item, index) => (
    <a href={item.path} key={index} target="_blank" rel="noopener noreferrer">
      <img src={item.image} alt={`Slide ${index + 1}`} className="sliderimg" />
    </a>
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
      disableDotsControls
    />
  );
};

export default MainCarosel;
