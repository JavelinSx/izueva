import type { FC } from 'react';
import priceItemList from '../PriceItem/PriceItemList';
import PriceItem from '../PriceItem/PriceItem';

import { PriceItemListProps } from '../PriceItem/PriceItemList';
interface PriceSectionProps {
  popupIsOpen: () => void;
  setPopupItem: (item: PriceItemListProps) => void;
}

const PriceSection: FC<PriceSectionProps> = ({ setPopupItem, popupIsOpen }) => {
  return (
    <div className='wrapper-white'>
      <section className='price-section' id='price-section'>
        <div className='price-section__wrapper'>
          <h2 className='price-section__title'>ПРАЙС / УСЛУГИ</h2>
          {priceItemList.map((item, index) => {
            return (
              <PriceItem
                key={index}
                title={item.service}
                imgSrc={item.imgSrc}
                price={item.price}
                openPopup={() => {
                  popupIsOpen();
                  setPopupItem(item);
                }}
              ></PriceItem>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default PriceSection;
