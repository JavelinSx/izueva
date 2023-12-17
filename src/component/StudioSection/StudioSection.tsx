import type { FC } from 'react';
import service from '../../img/studio/drink.gif';
import svkStudio from '../../img/studio/studio.webp';
import plesStudio1 from '../../img/studio/studio2.webp';
import plesStudio2 from '../../img/studio/studio3.webp';
interface StudioSectionProps {}

const StudioSection: FC<StudioSectionProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='studio' id='studio-section'>
        <h2 className='studio-title'>О СТУДИИ</h2>
        <h4 className='studio-info-wrapper'>
          <span className='studio-info'>
            Я предоставляю услуги по восстановлению и реконструкции волос как в Савинске, так и в Плесецке.
          </span>
          <br />
          <span className='studio-info'>
            Обе студии снабжены всем необходимым оборудованием для профессионального ухода за вашими волосами.
          </span>
          <br />
          <span className='studio-info'>Также по вашему желанию вас ждёт вкусный чай/кофе и приятные угощения!</span>
        </h4>

        <img className='studio-svk-img' src={svkStudio} alt=''></img>
        <img className='studio-ples-img' src={plesStudio1} alt=''></img>
        <img className='studio-ples-img' src={plesStudio2} alt=''></img>
        <img className='studio-service-img' src={service} alt=''></img>
      </section>
    </div>
  );
};

export default StudioSection;
