import React, { FC, useRef, Fragment, useCallback } from 'react';

import { IInpitProps } from 'types';
import {
  CurrentValue, IndicatorsContainerWrapper,
  ArrowDownIcon, CloseIcon,
   ValueContainerWrapper, ChipItemCheckbox } from './styled';

import ChipItem from './ChipItem';

const Input: FC<IInpitProps> = (
  {inputProps}
) => {
    const valueContainerWrapperRef = useRef();

    const setCounterChip = (index: number) => ' + ' + index;

    const handleRemoveAllClick = useCallback((e) => {
      e.stopPropagation();
      inputProps.setCurrentMultiValue([]);
    }, []);

    // const handleSelectWrapperClick = useCallback(() => setOpened((opened: any) => !opened), []);

  return (
    <CurrentValue>
        <ValueContainerWrapper ref={valueContainerWrapperRef}>
        {inputProps.currentMultiValue.length
            ? inputProps.currentMultiValue.map(
            (item: any, i: number) => {
                const label = item.$$typeof ? item.props['data-label'] : item.label;
                const value = item.$$typeof ? item.props['data-value'] : item.value;

                return (
                <Fragment key={value}>
                    <ChipItemCheckbox key={value + '_'}>
                      {setCounterChip(inputProps.currentMultiValue.length - i)}
                    </ChipItemCheckbox>

                    <ChipItem
                      key={value} value={value} data-is-chip
                      disabled={false}
                      currentMultiValue={inputProps.currentMultiValue}
                      setCurrentMultiValue={inputProps.setCurrentMultiValue}
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
            menuIsOpen={inputProps.opened}
            disabled={false}
          >X</CloseIcon>

          <ArrowDownIcon
            menuIsOpen={inputProps.opened}
            disabled={false}
          />
        </IndicatorsContainerWrapper>
      </CurrentValue>
  );
};

export default Input;
