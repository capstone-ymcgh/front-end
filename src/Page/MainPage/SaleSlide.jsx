import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SaleSlide.css';

import { Pagination, Navigation } from 'swiper/modules';

const SaleSlide = () => {
  const swiperRef = useRef(null);

  return (
    <div className='saleSlide-contanier'>
    <Swiper
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
      slidesPerView={5}
      slidesPerGroup={5}
      centeredSlides={false}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="saleSlide-swiper"
      initialSlide={0}
      loop={true}
    >
      <SwiperSlide className='sale-slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 4</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 5</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 6</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 7</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 8</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 9</SwiperSlide>
      <SwiperSlide className='sale-slide'>Slide 10</SwiperSlide>
    </Swiper>
    </div>
  );
}

export default SaleSlide;