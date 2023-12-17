import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarToggler } from 'mdb-react-ui-kit';
import LinkBurger from '../LinkBurger/LinkBurger';
interface BurgerProps {}

const Burger: FC<BurgerProps> = () => {
  const [showAnimated, setShowAnimated] = useState(false);
  const [closeBurger, setCloseBurger] = useState(false);
  useEffect(() => {
    if (closeBurger) {
      setShowAnimated(false);
      setCloseBurger(false);
    }
  }, [closeBurger]);
  const handleBurger = () => {
    setCloseBurger(true);
  };
  return (
    <div className='burger'>
      <MDBNavbar>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            className='burger-button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowAnimated(!showAnimated)}
          >
            <div className={`animated-icon1 ${showAnimated && 'open'}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <div className={`collapse ${showAnimated ? 'collapse-show' : 'collapse-hide'}`}>
        <ul className='collapse-menu'>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger text='О СТУДИИ' anchor='#studio-section' offset={-50} stateBurger={handleBurger}></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger text='ОЗОР РАБОТ' anchor='#view-section' offset={-50} stateBurger={handleBurger}></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger text='ПРАЙС' anchor='#price-section' offset={-50} stateBurger={handleBurger}></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger text='АКЦИИ' anchor='#action-section' offset={-50} stateBurger={handleBurger}></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger
              text='КАЛЬКУЛЯТОР'
              anchor='#calculator-section'
              offset={-50}
              stateBurger={handleBurger}
            ></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <LinkBurger text='КОНТАКТЫ' anchor='#contact-section' offset={-50} stateBurger={handleBurger}></LinkBurger>
          </li>
          <li className={`collapse-menu__item ${showAnimated ? 'animated-item' : 'collapse-menu__item-hide'}`}>
            <button className='map-vk-button fixed-button'>
              <a href='https://vk.com/keratin_botox_plessvk' target='_blank' rel='noreferrer'>
                Группа в VK
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
