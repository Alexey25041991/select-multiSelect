import React, { useState, useCallback, useRef, useEffect } from 'react';

import ChipItem from './ChipItem';
import { ISelectProps, ISelectItem } from 'types';
import {
  SelectWrapper, OptionWrapper, OptionContent,
  CurrentValue, IndicatorsContainerWrapper,
  ArrowDownIcon, CloseIcon, SelectContainer,
  Label, AdditionalText, Checkbox, ValueContainerWrapper, ChipItemChecbox
} from './styled';


// Поиск нужной опции среди всех
const findOption: any = (options: ISelectItem[], value: string) => {
  return options.filter(opt => opt.value === value)[0];
};

// interface Document {
//   addEventListener(event: "click", listener: (event: Event) => void, options?: {
//     passive?: boolean;
//     once?: boolean;
//     capture?: boolean;
//   }
// );
// }


const MySelect: React.FC<ISelectProps> = ({
  width, options, initialValue
}) => {
  const valueContainerWrapperRef = useRef();


  // Дропдаун открыт/закрыт

  const [ opened, setOpened ] = useState<boolean>(false);
  const [ currentMultiValue, setCurrentMultiValue ] = useState<ISelectItem[]>([]);

  // TODO: Вынести в хуки
  useEffect(() => {
    const closeHandler = (e: any) => {
      let target: any = e.target;
      if (!target.closest('[data-close-border]')) setOpened(false);
    };

    document.addEventListener('click', closeHandler);

    return () => {
      document.removeEventListener('click', closeHandler);
    };
  }, []);

  const handleSelectWrapperClick = useCallback(() => {
    setOpened(opened => !opened);
  }, []);


  // Текущее значение для multi-селекта

  const handleRemoveAllClick = useCallback((e) => {
    e.stopPropagation();
    setCurrentMultiValue([]);
  }, []);

  const handleOptionClick = useCallback((e) => {
    e.persist();

    if (!findOption(currentMultiValue, e.target.dataset.value)) {
      setCurrentMultiValue(
        (currentMultiValue) => [ ...currentMultiValue, findOption(options, e.target.dataset.value) ]
      );
    } else {
      setCurrentMultiValue(
        (currentMultiValue) => currentMultiValue.filter((opt: any) => opt.value !== e.target.dataset.value)
      );
    };
  }, [ currentMultiValue, options ]);

  const setCounterChip = (index: number) => {
    return ' + ' + index
  };

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
                  (v, index) => (
                    <>
                      <ChipItemChecbox>{setCounterChip(currentMultiValue.length - index)}</ChipItemChecbox>
                      <ChipItem
                        key={v.value} value={v.value} data-is-chip
                        currentMultiValue={currentMultiValue}
                        setCurrentMultiValue={setCurrentMultiValue}
                      >
                        {findOption(options, v.value).label}
                      </ChipItem>
                    </>
                  )
                )
              : <span>Не выбрано</span>
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
            {options.map(
              ({ label, value }) => (
                <OptionContent
                  key={value}
                  data-value={value}
                  onClick={handleOptionClick}
                >
                  <Checkbox style={{ pointerEvents: 'none' }}>
                    <input type='checkbox' checked={!!findOption(currentMultiValue, value)} readOnly />
                  </Checkbox>

                  {label}
                </OptionContent>
              )
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
