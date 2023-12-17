import type { FC } from 'react';
import Slider from 'react-slick';
import WrapperIframe from '../WrapperIframe/WrapperIframe';
import { sliderVideo } from '../../utils/utils';
interface SliderSectionProps {}

const SliderSection: FC<SliderSectionProps> = () => {
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
        <h2 className='slider-section__title'>ПРИМЕРЫ РАБОТ ДО / ПОСЛЕ</h2>
        <Slider className='slider-section__videos' {...settings}>
          {sliderVideo.map((item, index) => {
            return (
              <WrapperIframe
                key={index}
                link={item.link}
                linkWrapper={item.img}
                styleClass='slider-section__video'
              ></WrapperIframe>
            );
          })}
        </Slider>
      </section>
    </div>
  );
};

export default SliderSection;
