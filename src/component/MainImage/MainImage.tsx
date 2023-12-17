import type { FC } from 'react';
interface MainImageProps {
  imagePath: string;
  alt: string;
  classVariative: string;
}

const MainImage: FC<MainImageProps> = ({ imagePath, alt, classVariative }) => {
  return (
    <div className={classVariative ? `main-image__container ${classVariative}` : 'main-image__container'}>
      <div className='main-image__wrapper'>
        <img className='main-image' src={imagePath} alt={alt} loading='lazy'></img>
      </div>
    </div>
  );
};

export default MainImage;
