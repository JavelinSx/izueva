import type { FC } from 'react';
import masterPhoto from '../../img/master-photo.webp';
import MainImage from '../MainImage/MainImage';
interface MainSectionAboutProps {}

const MainSectionAbout: FC<MainSectionAboutProps> = () => {
  return (
    <div className='wrapper-white'>
      <section className='main-section__about' id='master-section'>
        <MainImage imagePath={masterPhoto} alt='' classVariative='main-section__master-img'></MainImage>

        <h3 className='main-section__info-title'>НЕМНОГО ОБО МНЕ</h3>

        <h4 className='main-section__info-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deserunt beatae perspiciatis quia aliquam.
          Nisi sint eligendi cumque consequatur perspiciatis? Similique, aliquam enim. Dolorum quidem mollitia quasi
          eveniet vel perferendis fugit eius perspiciatis cupiditate excepturi explicabo veniam aperiam est qui adipisci
          ad sunt tempore, ipsam error? Reprehenderit distinctio eligendi tempore. Possimus ipsa aperiam suscipit eaque
          nisi, sit similique eos odio nobis fugit illo necessitatibus voluptatum, sequi voluptatibus quaerat provident
          molestiae quos ipsum earum veritatis ab minus animi! Provident maiores ipsam officiis? Impedit earum,
          consequatur, cumque est ad quis illum nihil cum explicabo reprehenderit recusandae, obcaecati et? Fuga laborum
          commodi autem.
        </h4>
      </section>
    </div>
  );
};

export default MainSectionAbout;
