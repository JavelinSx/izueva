import type { FC } from 'react';

interface GalleryMoviesProps {}

const GalleryMovies: FC<GalleryMoviesProps> = () => {
  return (
    <div className='gallery-movies-wrapper'>
      <div className='gallery-movies-container'></div>
    </div>
  );
};

export default GalleryMovies;
