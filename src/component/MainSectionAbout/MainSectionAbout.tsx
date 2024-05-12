import type { FC } from 'react';
import { masterImgPath } from '../../utils/utils';
import EmblaCarousel from '../EmblaCarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { sliderWork } from '../../utils/utils';
interface MainSectionAboutProps {}

const MainSectionAbout: FC<MainSectionAboutProps> = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
  return (
    <div className='wrapper-white'>
      <section className='main-section__about' id='master-section'>
        <img src={masterImgPath} alt='' className='main-section__master-img'></img>

        <h3 className='main-section__info-title'>ВАШ МАСТЕР</h3>

        <h4 className='main-section__info-text'>
          Давайте познакомимся! Меня зовут Ирина. Приглашаю в мир красивых волос. Я являюсь сертифицированным
          мастером по реконструкции и восстановлению волос. После обучения постоянно повышаю свою квалификацию,
          совершенствую навыки и осваиваю новые техники работы. В моей студии комфортно и уютно. Работаю на
          оригинальных составах премиум класса. У меня индивидуальный подход. Я подберу процедуру именно для твоих
          волос, учту все пожелания. Я знаю, твои волосы - твоё богатство. Жду тебя в гости за красивыми волосами!
        </h4>
        <EmblaCarousel  slides={sliderWork} options={OPTIONS}></EmblaCarousel>
      </section>
    </div>
  );
};

export default MainSectionAbout;
