import type { FC } from 'react';
import { useState } from 'react';

import slide1 from '../../img/slides/slide1.jpg';
import slide2 from '../../img/slides/slide2.jpg';
import slide3 from '../../img/slides/slide3.jpg';
import slide4 from '../../img/slides/slide4.jpg';
import slide5 from '../../img/slides/slide5.jpg';

import MainImageWithPopup from '../MainImageWithPopup/MainImageWithPopup';
import SwiperMain from '../SwiperMain/SwiperMain';

interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = () => {
  const [imgData] = useState([slide1, slide2, slide3, slide4, slide5]);
  const [selectedImg, setSelectedImg] = useState(0);
  const [open, setOpen] = useState(false);

  const handlerOpenImg = (index: number) => {
    setSelectedImg(index + 1);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='wrapper-dark'>
      <section className='main-section' id='view-section'>
        <h2 className='main-section__title'>РАБОТЫ МАСТЕРА</h2>
        {imgData.map((imgItem, index) => (
          <MainImageWithPopup
            imagePath={imgItem}
            alt={''}
            key={index}
            isOpen={() => handlerOpenImg(index)}
          ></MainImageWithPopup>
        ))}
        <SwiperMain startSlide={selectedImg} open={open} close={handleClose}></SwiperMain>
      </section>
    </div>
  );
};

export default MainSection;
