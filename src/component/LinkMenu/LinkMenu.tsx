import { type FC } from 'react';

interface LinkMenuProps {
  text: string;
  anchor: string;
  animation: boolean;
  offset: number;
}

const LinkMenu: FC<LinkMenuProps> = ({ text, anchor, animation, offset }) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop + (offset || 0),
        behavior: 'smooth', // Для плавной прокрутки
      });
    }
  };
  return (
    <div className={`menu-item__wrapper ${animation ? 'menu-item__wrapper-show' : ''}`}>
      <a href={anchor} onClick={handleClick} className='menu-item'>
        {text}
      </a>
    </div>
  );
};

export default LinkMenu;
