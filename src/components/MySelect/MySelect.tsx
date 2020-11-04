import React, { useState, useCallback, useRef, useEffect } from 'react';

import ChipItem from './ChipItem';
import { ISelectProps, ISelectItem } from 'types';
import {
  SelectWrapper, OptionWrapper, OptionContent,
  CurrentValue, IndicatorsContainerWrapper,
  ArrowDownIcon, CloseIcon, SelectContainer,
  Label, AdditionalText, Checkbox, ValueContainerWrapper,
} from './styled';


// Поиск нужной опции среди всех
const findOption: any = (options: ISelectItem[], value: string) => {
  return options.filter(opt => opt.value === value)[0];
};


const MySelect: React.FC<ISelectProps> = ({
  width, options, initialValue
}) => {
  const valueContainerWrapperRef = useRef();


  // Дропдаун открыт/закрыт

  const [ opened, setOpened ] = useState<boolean>(false);

  const handleSelectWrapperClick = useCallback(() => {
    setOpened(opened => !opened);
  }, []);


  // Текущее значение для multi-селекта

  const [ currentMultiValue, setCurrentMultiValue ] = useState<ISelectItem[]>([ findOption(options, initialValue!) ]);

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

  useEffect(() => {
    const availableSpace = (width || 150) - 65;

    const wrapperNode: any = valueContainerWrapperRef.current;

    if (wrapperNode) {
      const nodesArr = Array.prototype.slice.call(wrapperNode.childNodes ? wrapperNode.childNodes : []);
      let occupiedWidth = 0;

      nodesArr.map((chip: any) => {
        if (chip.dataset.isChip) {
          occupiedWidth += Math.round(chip.getBoundingClientRect().width);
        };
      });

      console.log('occupiedWidth', occupiedWidth)
      console.log('diff', availableSpace - occupiedWidth)
    };
  });


  return (
    <SelectWrapper width={width}>
      <Label disabled={false}>
        Город
      </Label>

      <SelectContainer>
        <CurrentValue onClick={handleSelectWrapperClick}>
          <ValueContainerWrapper ref={valueContainerWrapperRef}>
            {currentMultiValue.length
              ? currentMultiValue.map(
                  v => (
                    <ChipItem
                      key={v.value} value={v.value} data-is-chip
                      currentMultiValue={currentMultiValue}
                      setCurrentMultiValue={setCurrentMultiValue}
                    >
                      {findOption(options, v.value).label}
                    </ChipItem>
                  )
                )
              : <span>Не выбрано</span>
            }

            {/* <ChipItemChecbox>+сч.</ChipItemChecbox> */}
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
