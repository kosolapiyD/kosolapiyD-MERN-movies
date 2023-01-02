import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper';

const MoviesSwiper = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='movies-swiper'
      >
        <SwiperSlide>
          <div className='movie-slide'>
            <h1>Movie 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='movie-slide'>
            <h1>Movie 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='movie-slide'>
            <h1>Movie 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MoviesSwiper;
