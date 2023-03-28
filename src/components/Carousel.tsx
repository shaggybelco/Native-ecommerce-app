import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IProduct } from '../Interface/IProduct';

interface CarouselProps {
  images: IProduct[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setActiveSlide(index),
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <p>Active Slide: {activeSlide + 1}</p>
    </div>
  );
};

export default Carousel;
