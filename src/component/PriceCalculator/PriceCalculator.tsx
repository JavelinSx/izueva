import type { FC } from 'react';
import { useState, useEffect, useRef, useMemo } from 'react';

interface PriceCalculatorProps {}

const PriceCalculator: FC<PriceCalculatorProps> = () => {
  const widthPriceStep = [
    {
      width: [7, 8],
      price: 600,
    },
    {
      width: [9, 10],
      price: 900,
    },
    {
      width: [11, 12],
      price: 1100,
    },
  ];
  const [selectedLabel, setSelectedLabel] = useState('');
  const [selectedValue, setSelectedValue] = useState({
    label: '',
    value: '',
    stepVolumePrice: 0,
    stepWidthPrice: widthPriceStep,
    startPrice: 0,
    calculate: true,
  });
  const [selectHairVolume, setSelectHairVolume] = useState('30');
  const [selectHairWidth, setSelectHairWidth] = useState('7');
  const [constPay, setConstPay] = useState(0);
  const [widthCalculate, setWidthCalculate] = useState(false);
  const [volumeCalculate, setVolumeCalculate] = useState(false);
  const hairVolume = useRef<HTMLInputElement | null>(null);
  const hairWidth = useRef<HTMLInputElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [options] = useState([
    {
      label: 'Тотальное восстановление',
      value: 'totalRecovery',
      calculate: false,
      startPrice: 2500,
      stepVolumePrice: 0,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
    },
    {
      label: 'Холодное восстановление',
      value: 'coldRecovery',
      stepVolumePrice: 600,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
      startPrice: 1600,
      calculate: true,
    },
    {
      label: 'SPA уход',
      value: 'careSpa',
      stepVolumePrice: 600,
      startPrice: 2300,
      calculate: true,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
    },
    {
      label: 'Пилинг кожи головы',
      value: 'peelingScalp',
      calculate: false,
      startPrice: 500,
      stepVolumePrice: 0,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
    },
    {
      label: 'Коллагеновое обёртование',
      value: 'collagenWrap',
      stepVolumePrice: 600,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
      startPrice: 1400,
      calculate: true,
    },
    {
      label: 'Ботокс',
      value: 'botox',
      stepVolumePrice: 600,
      stepWidthPrice: widthPriceStep,
      startPrice: 2500,
      calculate: true,
    },
    {
      label: 'Кератиновое выпрямление',
      value: 'keratinStraighten',
      stepVolumePrice: 600,
      stepWidthPrice: widthPriceStep,
      startPrice: 2800,
      calculate: true,
    },
  ]);

  const getPriceWidth = (width: number) => {
    for (const item of widthPriceStep) {
      const [minWidth, maxWidth] = item.width;
      if (width >= minWidth && width <= maxWidth) {
        return item.price;
      }
    }
    return 0;
  };

  useMemo(() => {
    setSelectedLabel(options[0].label);
    setSelectedValue({
      label: 'Тотальное восстановление',
      value: 'totalRecovery',
      calculate: false,
      startPrice: 2500,
      stepVolumePrice: 0,
      stepWidthPrice: [
        {
          width: [0],
          price: 0,
        },
      ],
    });
  }, []);

  useEffect(() => {
    if (selectedValue.calculate) {
      // Условие: selectedValue.calculate === true
      setVolumeCalculate(true);
      if (selectedValue.stepWidthPrice[0].price > 0) {
        setWidthCalculate(true);
      } else {
        setWidthCalculate(false);
      }
    } else {
      // Условие: selectedValue.calculate === false
      setVolumeCalculate(false);
      setWidthCalculate(false);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (!selectedValue.calculate) {
      setConstPay(selectedValue.startPrice);
    } else {
      let price = selectedValue.startPrice;
      if (volumeCalculate) {
        const stepPayVolume = (parseInt(selectHairVolume) - 40) / 10;
        price += stepPayVolume * selectedValue.stepVolumePrice;
      }
      if (widthCalculate) {
        const widthPrice = getPriceWidth(parseInt(selectHairWidth));
        price += widthPrice;
      }
      setConstPay(price);
    }
  }, [isOpen, selectHairVolume, selectHairWidth]);

  useEffect(() => {
    if (isOpen) {
      resetValues();
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const resetValues = () => {
    if (hairVolume.current) {
      hairVolume.current.value = '30';
      setSelectHairVolume('30');
    }
    if (hairWidth.current) {
      hairWidth.current.value = '7';
      setSelectHairWidth('7');
    }
  };

  const handleSelectItem = (item: any) => {
    setSelectedLabel(item.label);
    setSelectedValue(item);
    setIsOpen(false);
  };

  const handleChangeHairVolume = () => {
    const hairVolumeValue = hairVolume.current?.value; // Получить значение из ref
    if (hairVolumeValue !== undefined) {
      setSelectHairVolume(hairVolumeValue);
    }
  };

  const handleChangeHairWidth = () => {
    const hairVolumeWidth = hairWidth.current?.value; // Получить значение из ref
    if (hairVolumeWidth !== undefined) {
      setSelectHairWidth(hairVolumeWidth);
    }
  };

  return (
    <div className='wrapper-dark'>
      <section className='price-calculator' id='calculator-section'>
        <h2 className='price-calculator__title'>ПРИМЕРНЫЙ РАСЧЁТ СТОИМОСТИ УСЛУГ</h2>
        <h5 className='price-calculator__info'>
          Расчёт в калькуляторе - примерный. Точную стоимость можно узнать после очной коснультации.
        </h5>
        <label className='price-calculator-label'>Выберите услугу: </label>
        <div className='price-calculator__input' onClick={handleOpen}>
          <span className='price-calculator__span'>{selectedLabel}</span>
        </div>
        <ul className={isOpen ? 'price-calculator__list price-calculator-open' : 'price-calculator__list'}>
          {options.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  item.label === selectedLabel
                    ? 'price-calculator__item price-calculator__item-active'
                    : 'price-calculator__item'
                }
                onClick={() => handleSelectItem(item)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        {volumeCalculate ? (
          <div className='price-range__hair-volume'>
            <label className='price-range__hair-volume-label'>Длина волос: {selectHairVolume} см.</label>
            <input
              min={30}
              max={110}
              step={10}
              defaultValue={0}
              ref={hairVolume}
              type='range'
              onChange={handleChangeHairVolume}
              className='price-range__hair-volume-input'
            ></input>
          </div>
        ) : null}

        {widthCalculate ? (
          <div className='price-range__hair-width'>
            <label className='price-range__hair-width-label'>Густота волос: {selectHairWidth} см.</label>
            <input
              defaultValue={0}
              min={7}
              max={12}
              ref={hairWidth}
              type='range'
              onChange={handleChangeHairWidth}
              className='price-range__hair-width-input'
            ></input>
          </div>
        ) : null}

        <span className='price-range__const'>От {constPay}₽</span>
      </section>
    </div>
  );
};

export default PriceCalculator;
