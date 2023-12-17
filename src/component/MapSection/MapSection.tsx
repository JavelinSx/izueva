import type { FC } from 'react';

interface MapSectionProps {}

const MapSection: FC<MapSectionProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='map' id='contact-section'>
        <div className='map-wrapper-info'>
          <h2 className='map-title'>КОНТАКТЫ</h2>
          <h5 className='map-info'>Я работю в Савинске и Плесецке</h5>
          <h5 className='map-telefon'>
            Телефон:{' '}
            <a className='map-telefon-link' href='tel:89021962407'>
              89021962407
            </a>
          </h5>
        </div>
        <div className='map-savinsk'>
          <h5 className='map-city-info'>
            <span>Адрес Савинский: </span>
            <span>ул. Октябрьская 10, кв.61</span>
          </h5>
          <button className='map-button'>
            <a href='https://yandex.ru/maps/-/CDatzT89' className='map-button-link' target='_blank' rel='noreferrer'>
              Открыть карту
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-geo-alt map-geo'
                viewBox='0 0 16 16'
              >
                <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
                <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
              </svg>
            </a>
          </button>
        </div>
        <div className='map-pleseck'>
          <h5 className='map-city-info'>
            <span>Адрес Плесецк: </span>
            <span>ул. Кооперативная, 4Б, ТЦ 'ГАРАНТ', 3 этаж, офис 21</span>
          </h5>
          <button className='map-button'>
            <a href='https://yandex.ru/maps/-/CDatzO6o' className='map-button-link' target='_blank' rel='noreferrer'>
              Открыть карту
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-geo-alt map-geo'
                viewBox='0 0 16 16'
              >
                <path d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z' />
                <path d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
              </svg>
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MapSection;
