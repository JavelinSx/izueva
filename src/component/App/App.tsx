import type { FC } from 'react';
import { useState, useEffect } from 'react';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import SliderSection from '../SliderSection/SliderSection';
import PriceSection from '../PriceSection/PriceSection';
import AboutSection from '../AboutSection/AboutSection';
import Header from '../Header/Header';
import MainSectionAbout from '../MainSectionAbout/MainSectionAbout';
import PricePopup from '../PricePopup/PricePopup';
import PriceCalculator from '../PriceCalculator/PriceCalculator';
import MapSection from '../MapSection/MapSection';

interface AppProps {}

const App: FC<AppProps> = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [popupItem, setPopupItem] = useState({
    service: '',
    description: '',
    consist: [''],
    price: [0],
    additionaly: [''],
    imgSrc: '',
  });
  const handlePopupOpen = () => {
    setOpenPopup(true);
  };
  const handlePopupClose = () => {
    setOpenPopup(false);
  };
  return (
    <div className='app'>
      <Header></Header>
      <MainSection></MainSection>
      <SliderSection></SliderSection>
      <MainSectionAbout></MainSectionAbout>
      <PriceSection popupIsOpen={handlePopupOpen} setPopupItem={setPopupItem}></PriceSection>
      <PriceCalculator></PriceCalculator>
      <MapSection></MapSection>
      <Footer></Footer>
      {openPopup ? <PricePopup item={popupItem} closePopup={handlePopupClose}></PricePopup> : null}
    </div>
  );
};

export default App;
