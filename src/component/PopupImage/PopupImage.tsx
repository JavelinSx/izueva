import type { FC } from 'react';
interface PopupImageProps {
  imagePath: string;
}

const PopupImage: FC<PopupImageProps> = ({ imagePath }) => {
  return (
    <>
      <div className='popup-image__container'>
        <img className='popup-image' loading='lazy' src={imagePath} alt='full'></img>
        <div className='popup-close'>
          <span className='popup-close__span'></span>
          <span className='popup-close__span'></span>
        </div>
      </div>
    </>
  );
};

export default PopupImage;
