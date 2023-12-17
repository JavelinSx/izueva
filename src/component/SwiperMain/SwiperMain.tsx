import type { FC } from 'react';
import { imageSlides } from '../../utils/utils';
import Slider from 'react-slick';

interface SwiperMainProps {
  close: () => void;
  open: boolean;
  startSlide: number;
}

const SwiperMain: FC<SwiperMainProps> = ({ close, open, startSlide }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startSlide - 1,
  };
  const closeHandler = () => {
    close();
  };
  return (
    <>
      <div
        className={open ? 'swiper-background swiper-background-open' : 'swiper-background swiper-background-hide'}
      ></div>
      <div className={open ? 'swiper__wrapper swiper__wrapper-open ' : 'swiper__wrapper swiper__wrapper-hide'}>
        {open ? (
          <Slider className='swiper swiper-open' {...settings}>
            {imageSlides.map((img, index) => (
              <img src={img} alt='' loading='lazy' key={index} className='swiper-img'></img>
            ))}
          </Slider>
        ) : null}

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
