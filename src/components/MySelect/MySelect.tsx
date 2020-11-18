import React, { useState, useCallback, useRef, useEffect, Fragment } from 'react';

import ChipItem from './ChipItem';
import { ISelectProps, MyOptions } from 'types';
import {
  SelectWrapper, OptionWrapper, OptionContent,
  CurrentValue, IndicatorsContainerWrapper,
  ArrowDownIcon, CloseIcon, SelectContainer,
  Label, AdditionalText, Checkbox, ValueContainerWrapper, ChipItemCheckbox
} from './styled';


// Поиск нужной опции среди всех
const findOption: any = (list: MyOptions[], value: string) => {
  return list.filter((opt: any) => {
    if (opt.$$typeof) {
      return opt.props['data-value'] === value;
    } else {
      return opt.value === value;
    };
  })[0];
};


const MySelect: React.FC<ISelectProps> = ({
  width, options, initialValue
}) => {
  // Ref to container
  const valueContainerWrapperRef = useRef();
  const initialValueOptions = initialValue ? initialValue : [];
  const list1 = [...options, ...initialValueOptions];
  const list = list1.reduce((st: any, el: any) => (st.map((e: { value: any; }) => e.value)).includes(el.value) ? st : [...st, el],[])

  // Дропдаун открыт/закрыт
  const [ opened, setOpened ] = useState<boolean>(false);
  const [ dropdownListBorders, setDropdownListMoveBorders ] = useState<boolean>(false);
  const [ currentMultiValue, setCurrentMultiValue ] = useState<MyOptions[]>(initialValueOptions);

  // TODO: Вынести в хуки
  // Click outside select
  useEffect(() => {
    // console.log(111, document.getElementById('OptionWrapper'));
    const a = document.getElementById('OptionWrapper');
    const b = document.documentElement.clientHeight
    // console.log(222, a)
    // console.log('Height', b)

    if(a) {
      const getCoords = (a: any , b: any) => {
        let box = a.getBoundingClientRect();
        const top = box.top
        const bottom = box.top + box.height;
        const bottomHeightBorder = b - bottom
        const bottomHeight = b - box.top 

        const bottomSwitch = Math.abs(top) > Math.abs(bottomHeight);
        if(bottomHeightBorder < 0 ) {
          setDropdownListMoveBorders(true);
        } 

        if(bottomHeightBorder - 61 > box.height) {
          setDropdownListMoveBorders(false);
        } 
        // else {setDropdownListMoveBorders(false)}

        return {
          top: top,
          bottom: bottom,
          bottomHeightBorder: bottomHeightBorder,
          bottomHeight: bottomHeight,
          bottomSwitch: bottomSwitch,
        };
      }
      console.log(333, getCoords(a, b))
    }

    const closeHandler = (e: any) => {
      let target: any = e.target;
      if (!target.closest('[data-close-border]')) setOpened(false);
    };

    document.addEventListener('click', closeHandler);

    return () => document.removeEventListener('click', closeHandler);
  });

  // Show/close dropdown
  const handleSelectWrapperClick = useCallback(() => setOpened(opened => !opened), []);

  // Select value
  const handleOptionClick = useCallback((e) => {
    let { value } = e.currentTarget.dataset

    if (!findOption(currentMultiValue, value)) {
      setCurrentMultiValue(
        (currentMultiValue) => [ ...currentMultiValue, findOption(list, value) ]
      );
    } else {
      setCurrentMultiValue(
        (currentMultiValue) => currentMultiValue.filter((opt: any) => {
          if (opt.$$typeof) {
            return opt.props['data-value'] !== value;
          } else {
            return opt.value !== value;
          };
        })
      );
    };
  }, [ currentMultiValue, list ]);

  // Remove chip
  const handleRemoveAllClick = useCallback((e) => {
    e.stopPropagation();
    setCurrentMultiValue([]);
  }, []);

  //
  const setCounterChip = (index: number) => ' + ' + index;


  return (
    <SelectWrapper width={width} data-close-border>
      <Label disabled={false}>
        Город
      </Label>

      <SelectContainer>
        <CurrentValue onClick={handleSelectWrapperClick}>
          <ValueContainerWrapper ref={valueContainerWrapperRef}>
            {currentMultiValue.length
              ? currentMultiValue.map(
                (item: any, i: number) => {
                  const label = item.$$typeof ? item.props['data-label'] : item.label;
                  const value = item.$$typeof ? item.props['data-value'] : item.value;

                  return (
                    <Fragment key={value}>
                      <ChipItemCheckbox key={value + '_'}>
                        {setCounterChip(currentMultiValue.length - i)}
                      </ChipItemCheckbox>

                      <ChipItem
                        key={value} value={value} data-is-chip
                        disabled={false}
                        currentMultiValue={currentMultiValue}
                        setCurrentMultiValue={setCurrentMultiValue}
                      >
                        {label}
                      </ChipItem>
                    </Fragment>
                  );
                }
              ) : <span>Не выбрано</span>
            }
          </ValueContainerWrapper>

          <IndicatorsContainerWrapper>
            <CloseIcon
              onClick={handleRemoveAllClick}
              menuIsOpen={opened}
              disabled={false}
            >X</CloseIcon>

            <ArrowDownIcon
              menuIsOpen={opened}
              disabled={false}
              data-close
            />
          </IndicatorsContainerWrapper>
        </CurrentValue>

        {opened && (
          <OptionWrapper id="OptionWrapper" dropdownListBorders={dropdownListBorders}>
            {list.map(
              (item: any, i: number) => {
                if (item.$$typeof) {
                  return (
                    <div
                      key={i}
                      data-wrapper
                      data-value={item.props['data-value']}
                      onClick={handleOptionClick}
                    >
                      <Checkbox style={{ pointerEvents: 'none' }}>
                        <input type='checkbox' checked={!!findOption(currentMultiValue, item.props['data-value'])} readOnly />
                      </Checkbox>

                      {item}
                    </div>
                  );
                } else {
                  return (
                    <OptionContent
                      key={item.value}
                      data-value={item.value}
                      onClick={handleOptionClick}
                    >
                      <Checkbox style={{ pointerEvents: 'none' }}>
                        <input type='checkbox' checked={!!findOption(currentMultiValue, item.value)} readOnly />
                      </Checkbox>

                      {item.label}
                    </OptionContent>
                  );
                };
              }
            )}
          </OptionWrapper>
        )}
      </SelectContainer>

      <AdditionalText error={false} disabled={false}>
        Место фактического проживания
      </AdditionalText>
    </SelectWrapper>
  );
};

export default MySelect;
