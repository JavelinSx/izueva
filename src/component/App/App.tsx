import type { FC } from 'react';
import { useState } from 'react';
import MainSection from '../MainSection/MainSection';
import SliderSection from '../SliderSection/SliderSection';
import PriceSection from '../PriceSection/PriceSection';
import Header from '../Header/Header';
import MainSectionAbout from '../MainSectionAbout/MainSectionAbout';
import PricePopup from '../PricePopup/PricePopup';
import PriceCalculator from '../PriceCalculator/PriceCalculator';
import MapSection from '../MapSection/MapSection';
import StudioSection from '../StudioSection/StudioSection';
import Action from '../Action/Action';

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
    <div className='app theme-light'>
      <Header></Header>
      <MainSection></MainSection>
      <MainSectionAbout></MainSectionAbout>
      <SliderSection></SliderSection>
      <PriceSection popupIsOpen={handlePopupOpen} setPopupItem={setPopupItem}></PriceSection>
      <PriceCalculator></PriceCalculator>
      <StudioSection></StudioSection>
      <Action></Action>
      <MapSection></MapSection>
      {openPopup ? <PricePopup item={popupItem} closePopup={handlePopupClose}></PricePopup> : null}
    </div>
  );
};

export default App;
