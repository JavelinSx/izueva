export const useImageSlides = () => {
  const imageSlides = Array.from({ length: 17 }, (_, i) =>
    `/images/img-slider/slide${i + 1}.webp`
  )

  const imageSlidesMin = Array.from({ length: 17 }, (_, i) =>
    `/images/img-slider-min/slide${i + 1}.webp`
  )

  const sliderWork = [1, 3, 2, 4, 6, 5, 7, 8, 9, 10].map(i =>
    `/images/img-slider-work/slide${i}.jpg`
  )

  const sliderVideo = [
    {
      link: 'https://www.youtube.com/embed/fGZMiowO67s?si=9tP94d8VSOPJBP8W',
      img: '/images/img-video/video1.webp',
    },
    {
      link: 'https://www.youtube.com/embed/Erw7t34uxnM?si=iLtNtZpdY2aqh3MX',
      img: '/images/img-video/video2.webp',
    },
    {
      link: 'https://www.youtube.com/embed/b-CzOcZeN5U?si=XmGehpjbb_Rt3qMh',
      img: '/images/img-video/video3.webp',
    },
    {
      link: 'https://www.youtube.com/embed/K3FqGLKDcqE?si=g4sxUmeB6K0-DgVv',
      img: '/images/img-video/video4.webp',
    },
  ]

  const masterImgPath = '/images/master/master.webp'

  const priceImg = [
    '/images/img-service-list/botox.webp',
    '/images/img-service-list/collagen.webp',
    '/images/img-service-list/cold-recovery.webp',
    '/images/img-service-list/spa.webp',
    '/images/img-service-list/total-recovery.webp',
    '/images/img-service-list/keratin.webp',
  ]

  return {
    imageSlides,
    imageSlidesMin,
    sliderVideo,
    sliderWork,
    priceImg,
    masterImgPath,
  }
}
