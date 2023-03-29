import React, { useState } from 'react';
import { IProduct } from '../Interface/IProduct';

interface CarouselProps {
    products: IProduct[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        const nextSlide = currentSlide + 1;
        setCurrentSlide(nextSlide >= products.length ? 0 : nextSlide);
    };

    const handlePrev = () => {
        const prevSlide = currentSlide - 1;
        setCurrentSlide(prevSlide < 0 ? products.length - 1 : prevSlide);
    };

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={products[currentSlide]?.image} alt={`Slide ${currentSlide}`} style={{ width: 'auto', height: '200px', objectFit: 'cover' }} />
            <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
                Prev
            </button>
            <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
                Next
            </button>
        </div>
    );
};

export default Carousel;
