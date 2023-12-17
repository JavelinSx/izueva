import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { imageSlidesMin } from '../../utils/utils';
import MainImageWithPopup from '../MainImageWithPopup/MainImageWithPopup';
import SwiperMain from '../SwiperMain/SwiperMain';

interface MainSectionProps {}

const MainSection: FC<MainSectionProps> = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [open, setOpen] = useState(false);
  const [lengthGallery, setLengthGallery] = useState(5);
  const [gallery, setGallery] = useState(['']);
  const [stateButtonRollup, setStateButtonRollup] = useState(false);
  const [stateButtonMore, setStateButtonMore] = useState(true);

  useEffect(() => {
    setGallery(imageSlidesMin.slice(0, lengthGallery));
    if (lengthGallery >= imageSlidesMin.length) {
      setStateButtonMore(!stateButtonMore);
    }
  }, [lengthGallery]);

  const handlerOpenImg = (index: number) => {
    setSelectedImg(index + 1);
    setOpen(true);
  };

  const handleMoreImage = () => {
    setLengthGallery(lengthGallery + 3);
    setStateButtonRollup(true);
  };
  const handleRollUp = () => {
    setLengthGallery(5);
    setStateButtonRollup(false);
    setStateButtonMore(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='wrapper-dark'>
      <section className='main-section' id='view-section'>
        <h2 className='main-section__title'>РАБОТЫ МАСТЕРА</h2>
        {gallery.map((imgLink, index) => (
          <MainImageWithPopup
            imagePath={imgLink}
            alt={''}
            key={index}
            isOpen={() => handlerOpenImg(index)}
          ></MainImageWithPopup>
        ))}
        {stateButtonMore ? (
          <button className='main-setcion__button-more' onClick={handleMoreImage}>
            Показать ещё
          </button>
        ) : null}

        {stateButtonRollup ? (
          <button className='main-section__button-rollup' onClick={handleRollUp}>
            Свернуть
          </button>
        ) : null}

        <SwiperMain startSlide={selectedImg} open={open} close={handleClose}></SwiperMain>
      </section>
    </div>
  );
};

export default MainSection;
