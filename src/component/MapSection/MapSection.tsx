import type { FC } from 'react';

interface MapSectionProps {}

const MapSection: FC<MapSectionProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='map' id='contact-section'>
        <div className='map-wrapper-info'>
          <h2 className='map-title'>КОНТАКТЫ</h2>
          <h5 className='map-vk'>
            Вступайте в нашу группу ВКОНАКТЕ. Там вы можете получить актуальную информацию по акциям и скидкам, а так же
            принять участкие в розыгрышах или проконсультироваться по предоставляемым услугам.
          </h5>
          <button className='map-vk-button'>
            <a href='https://vk.com/keratin_botox_plessvk' target='_blank' rel='noreferrer'>
              Вступить в группу
            </a>
          </button>
          <h5 className='map-info'>Мы работаем в Савинске и Плесецке</h5>
          <h5 className='map-telefon'>Телефон: 89021962407</h5>
        </div>
        <div className='map-savinsk'>
          <h5 className='map-city-info'>Адрес Савинский: ул. Октябрьская 10, кв.61</h5>
          <iframe
            title='savinsk'
            className='map-frame'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A5e2e69dcadb54d1c1a570f9d21824c169f4f7bb613f4316a7877409ddfce32bc&amp;source=constructor'
          ></iframe>
        </div>
        <div className='map-pleseck'>
          <h5 className='map-city-info'>Адрес Плесецк: ул. Кооперативная, 4Б, ТЦ 'ГАРАНТ'</h5>
          <iframe
            title='pleseck'
            className='map-frame'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A7e92ff7f018efc88420a12e417d9e056dafca2907018042f010017bead07673a&amp;source=constructor'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default MapSection;
