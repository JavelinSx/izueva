import type { FC } from 'react';
import React, { useState, useEffect, useMemo, useRef } from 'react';

import Slider from 'react-slick';
// импортируйте стили Swiper
import slide1 from '../../img/slidesHD/slide1.jpg';
import slide2 from '../../img/slidesHD/slide2.jpg';
import slide3 from '../../img/slidesHD/slide3.jpg';
import slide4 from '../../img/slidesHD/slide4.jpg';
import slide5 from '../../img/slidesHD/slide5.jpg';
import slide6 from '../../img/slidesHD/slide6.jpg';

interface SwiperMainProps {
  close: () => void;
  open: boolean;
  startSlide: number;
}

const SwiperMain: FC<SwiperMainProps> = ({ close, open, startSlide }) => {
  const [imgData] = useState([slide1, slide2, slide3, slide4, slide5]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const closeHandler = () => {
    close();
  };
  return (
    <>
      <div className={open ? 'swiper-background swiper-background-open' : 'swiper-background'}></div>
      <div className={open ? 'swiper__wrapper-open swiper__wrapper' : 'swiper__wrapper'}>
        <Slider className={open ? 'swiper swiper-open' : 'swiper'} {...settings}>
          {imgData.map((img, index) => (
            <img src={img} alt='' key={index} className='swiper-img'></img>
          ))}
        </Slider>
        {open ? (
          <div className='swiper-close' onClick={closeHandler}>
            <span className='swiper-close__span'></span>
            <span className='swiper-close__span'></span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SwiperMain;
