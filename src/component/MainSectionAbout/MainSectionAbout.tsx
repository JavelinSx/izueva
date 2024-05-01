import type { FC } from 'react';
import { masterImgPath } from '../../utils/utils';
import MainImage from '../MainImage/MainImage';
interface MainSectionAboutProps {}

const MainSectionAbout: FC<MainSectionAboutProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='main-section__about' id='master-section'>
        <img src={masterImgPath} alt='' className='main-section__master-img'></img>

        <h3 className='main-section__info-title'>ВАШ МАСТЕР</h3>

        <h4 className='main-section__info-text'>
          Давайте познакомимся! Меня зовут Ирина. Приглашаю вас в мир красивых волос. Я являюсь сертифицированным
          мастером по реконструкции и восстановлению волос. После обучения постоянно повышаю свою квалификацию,
          совершенствую навыки и осваиваю новые технологии работы. В моей студии комфортно и уютно. Работаю на
          оригинальных составах премиум класса. У меня индивидуальный подход. Я подберу процедуру именно для ваших
          волос, учту все пожелания. Я знаю, ваши волосы - ваше богатство. Жду тебя в гости за красивыми волосами!
        </h4>
      </section>
    </div>
  );
};

export default MainSectionAbout;
