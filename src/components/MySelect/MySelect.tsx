import React, { useState, useCallback, useRef, useEffect } from 'react';

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
  const list = [...options, ...initialValueOptions];
  // Дропдаун открыт/закрыт
  const [ opened, setOpened ] = useState<boolean>(false);
  const [ currentMultiValue, setCurrentMultiValue ] = useState<MyOptions[]>(initialValueOptions);

  // TODO: Вынести в хуки
  // Click outside select
  useEffect(() => {
    const closeHandler = (e: any) => {
      let target: any = e.target;
      if (!target.closest('[data-close-border]')) setOpened(false);
    };

    document.addEventListener('click', closeHandler);

    return () => document.removeEventListener('click', closeHandler);
  }, []);

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
                    <>
                      <ChipItemCheckbox key={value + '_'}>
                        {setCounterChip(currentMultiValue.length - i)}
                      </ChipItemCheckbox>

                      <ChipItem
                        key={value} value={value} data-is-chip
                        currentMultiValue={currentMultiValue}
                        setCurrentMultiValue={setCurrentMultiValue}
                      >
                        {label}
                      </ChipItem>
                    </>
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
          <OptionWrapper>
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
