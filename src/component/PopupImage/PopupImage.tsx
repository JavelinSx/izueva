import type { FC } from 'react';
import { useState, useEffect } from 'react';
interface PopupImageProps {
  imagePath: string;
  close: () => void;
  isOpen: boolean;
}

const PopupImage: FC<PopupImageProps> = ({ imagePath, close, isOpen }) => {
  const [openDelay, setOpenDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpenDelay(true);
    }, 100);
  }, [isOpen]);

  const closeHandler = () => {
    setTimeout(() => {
      close();
    }, 200);
    setOpenDelay(false);
  };

  return (
    <>
      <div className={openDelay ? 'popup-image__container popup-image__container-show' : 'popup-image__container'}>
        <img className='popup-image' src={imagePath} alt='full'></img>
        <div className='popup-close' onClick={closeHandler}>
          <span className='popup-close__span'></span>
          <span className='popup-close__span'></span>
        </div>
      </div>
      <div className={openDelay ? 'popup-image__wrapper popup-image__wrapper-show' : 'popup-image__wrapper'}></div>
    </>
  );
};

export default PopupImage;
