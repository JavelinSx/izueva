import type { FC } from 'react';
import { PriceItemListProps } from '../PriceItem/PriceItemList';

interface PricePopupProps {
  item: PriceItemListProps;
  closePopup: () => void;
}

const PricePopup: FC<PricePopupProps> = ({ item, closePopup }) => {
  const { price, imgSrc, service, consist, additionaly, description } = item;
  const priceText = price.length === 2 ? `От ${price[0]} до ${price[1]}` : `От ${price[0]}`;
  const handleClick = () => {
    closePopup();
  };

  return (
    <>
      <div className='price-popup'>
        <div className='price-popup__img-wrapper'>
          <img className='price-popup__img' src={imgSrc} alt=''></img>
          <div className='price-popup__img-background'></div>
        </div>

        <h5 className='price-popup__title'>{service}</h5>
        <div className='price-popup__wrapper-info'>
          <h6 className='price-popup__description'>{description}</h6>
          <ul className='price-popup__consist'>
            {consist.map((item, index) => {
              return (
                <li className='price-popup__consist-item' key={index}>
                  {item}
                </li>
              );
            })}
          </ul>

          <ul className='price-popup__additionaly'>
            {additionaly.map((item, index) => {
              return (
                <li className='price-popup__additionaly-item' key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <div className='price-popup__price'>{priceText}</div>
        </div>
        <button className='price-popup__button-close' onClick={handleClick}>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className='price-popup__wrapper'></div>
    </>
  );
};

export default PricePopup;
