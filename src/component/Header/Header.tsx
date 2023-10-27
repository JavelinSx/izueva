import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Обработчик изменения размера окна
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

  return <div className='header'>{windowWidth >= 768 ? <Menu></Menu> : <Burger></Burger>}</div>;
};

export default Header;
