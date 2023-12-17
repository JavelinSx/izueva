import type { FC } from 'react';

interface MainImageWithPopupProps {
  imagePath: string;
  alt: string;
  isOpen: () => void;
}

const MainImageWithPopup: FC<MainImageWithPopupProps> = ({ imagePath, alt, isOpen }) => {
  return (
    <div className={`main-image__container`}>
      <div className='main-image__wrapper'>
        <img
          className='main-image'
          loading='lazy'
          src={imagePath}
          alt={alt}
          onClick={() => {
            isOpen();
          }}
        ></img>
      </div>
    </div>
  );
};

export default MainImageWithPopup;
