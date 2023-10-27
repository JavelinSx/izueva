import type { FC } from 'react';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

interface SliderSectionProps {}

const SliderSection: FC<SliderSectionProps> = () => {
  const [linksVideo] = useState([
    'https://www.youtube.com/embed/fGZMiowO67s?si=9tP94d8VSOPJBP8W',
    'https://www.youtube.com/embed/Erw7t34uxnM?si=iLtNtZpdY2aqh3MX',
    'https://www.youtube.com/embed/b-CzOcZeN5U?si=XmGehpjbb_Rt3qMh',
    'https://www.youtube.com/embed/K3FqGLKDcqE?si=g4sxUmeB6K0-DgVv',
  ]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className='wrapper-dark'>
      <section className='slider-section'>
        <h2 className='slider-section__title'>ПРИМЕРЫ РАБОТ ДО\ПОСЛЕ</h2>
        <Slider className='slider-section__videos' {...settings}>
          {linksVideo.map((link, index) => {
            return (
              <iframe
                className='slider-section__video'
                src={link}
                title='YouTube video player'
                allow='accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default SliderSection;
