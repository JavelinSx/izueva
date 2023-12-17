import type { FC } from 'react';

interface PriceItemProps {
  title: string;
  imgSrc: string;
  price: number[];
  openPopup: () => void;
}

const PriceItem: FC<PriceItemProps> = ({ title, imgSrc, price, openPopup }) => {
  const priceText = price.length === 2 ? `От ${price[0]} до ${price[1]}` : `От ${price[0]}`;
  const handleClick = () => {
    openPopup();
  };
  return (
    <>
      <div className='price-item'>
        <img className='price-item__img' loading='lazy' src={imgSrc} alt=''></img>
        <div className='price-item__wrapper-info'>
          <h5 className='price-item__title'>{title}</h5>
          <div className='price-item__wrapper-description'>
            <div className='price-item__price'>{priceText}</div>
            <button className='price-item__button-popup' onClick={handleClick}>
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceItem;
