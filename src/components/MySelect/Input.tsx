import React, { FC, useRef, Fragment, useCallback } from 'react';

import { IInpitProps } from 'types';
import {
  CurrentValue, IndicatorsContainerWrapper,
  ArrowDownIcon, CloseIcon,
   ValueContainerWrapper, ChipItemCheckbox } from './styled';

import ChipItem from './ChipItem';

const Input: FC<IInpitProps> = ({
  opened,
  currentMultiValue,
  setCurrentMultiValue,
  setOpened,
}) => {
    const valueContainerWrapperRef = useRef();

    const setCounterChip = (index: number) => ' + ' + index;

    const handleRemoveAllClick = useCallback((e) => {
      e.stopPropagation();
      setCurrentMultiValue([]);
    }, []);

    const handleSelectWrapperClick = useCallback(() => setOpened((opened: any) => !opened), []);

  return (
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
          />
        </IndicatorsContainerWrapper>
      </CurrentValue>
  );
};

export default Input;
