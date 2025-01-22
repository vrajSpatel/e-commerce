import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from './MainCarouselData';


const MainCarousel = () => {
    const items = MainCarouselData.map((item)=>{
        return <img src={item.image} role='presentation' className='cursor-pointer' alt='/'></img>
    })
   return (
       <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
    )
};

export default MainCarousel;