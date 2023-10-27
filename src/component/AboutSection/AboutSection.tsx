import type { FC } from 'react';
import { useState, useEffect } from 'react';

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = () => {
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

  return (
    <section className='about padding-common'>
      <div className='about__wrapper wrapper'></div>
    </section>
  );
};

export default AboutSection;
