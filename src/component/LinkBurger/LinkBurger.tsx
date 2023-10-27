import type { FC } from 'react';
interface LinkBurgerProps {
  text: string;
  anchor: string;
  offset: number;
  stateBurger: () => void;
}

const LinkBurger: FC<LinkBurgerProps> = ({ text, anchor, offset, stateBurger }) => {
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
    stateBurger();
  };
  return (
    <a href={anchor} onClick={handleClick} className='burger-item'>
      {text}
    </a>
  );
};

export default LinkBurger;
