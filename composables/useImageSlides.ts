export const useImageSlides = () => {
  // Работы мастера: превью для сетки и полноразмерное фото для просмотра
  const works = Array.from({ length: 17 }, (_, i) => ({
    thumb: `/images/img-slider-thumb/slide${i + 1}.webp`,
    full: `/images/img-slider/slide${i + 1}.webp`,
  }))

  const sliderVideo = [
    {
      id: 'fGZMiowO67s',
      img: '/images/img-video/video1.webp',
    },
    {
      id: 'Erw7t34uxnM',
      img: '/images/img-video/video2.webp',
    },
    {
      id: 'b-CzOcZeN5U',
      img: '/images/img-video/video3.webp',
    },
    {
      id: 'K3FqGLKDcqE',
      img: '/images/img-video/video4.webp',
    },
  ]

  return {
    works,
    sliderVideo,
  }
}
