import type { FC } from 'react';
import { useState, useEffect } from 'react';
interface MainImageWithPopupProps {
  imagePath: string;
  alt: string;
  isOpen: () => void;
}

const MainImageWithPopup: FC<MainImageWithPopupProps> = ({ imagePath, alt, isOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    // Добавляем слушатель изменения размера окна
    window.addEventListener('resize', updateWindowWidth);
    // Вызываем функцию для первоначальной установки ширины окна
    updateWindowWidth();
    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // Пустая зависимость, так как мы не зависимы от windowWidth
  return (
    <div className={`main-image__container`}>
      <div className='main-image__wrapper'>
        <img
          className='main-image'
          src={imagePath}
          alt={alt}
          onClick={() => {
            if (windowWidth >= 768) {
              isOpen();
            }
          }}
        ></img>
      </div>
    </div>
  );
};

export default MainImageWithPopup;
