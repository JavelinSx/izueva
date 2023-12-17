import type { FC } from 'react';
import { useState, useEffect } from 'react';
import LinkMenu from '../LinkMenu/LinkMenu';
interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(-120);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

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

  useEffect(() => {
    if (windowWidth < 767) {
      setOffset(1);
    }
  }, [windowWidth]);
  return (
    <div className='menu'>
      <LinkMenu text='О СТУДИИ' anchor='#studio-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='ОБЗОР РАБОТ' anchor='#view-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='О МАСТЕРЕ' anchor='#master-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='ПРАЙС' anchor='#price-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='КАЛЬКУЛЯТОР' anchor='#calculator-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='АКЦИИ' anchor='#action-section' offset={offset} animation={showAnimation}></LinkMenu>
      <LinkMenu text='КОНТАКТЫ' anchor='#contact-section' offset={offset} animation={showAnimation}></LinkMenu>
      <button className='map-vk-button fixed-button'>
        <a href='https://vk.com/keratin_botox_plessvk' target='_blank' rel='noreferrer'>
          Группа в VK
        </a>
      </button>
    </div>
  );
};

export default Menu;
