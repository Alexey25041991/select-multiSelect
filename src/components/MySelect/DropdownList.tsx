import React, { FC, useState, useEffect, useCallback } from 'react';

import { IDropdownListProps } from 'types';
import {  OptionWrapper, OptionContent, Checkbox, OptionContentLabel, } from './styled';

  import { MyOptions } from 'types';

const findOption: any = (list: MyOptions[], value: string) => {
  return list.filter((opt: any) => {
    const valueOptions = typeof opt.value === 'number' ? parseFloat(value) : value;
    if (opt.$$typeof) {
      return opt.props['data-value'] === value;
    } else {
      return opt.value === valueOptions;
    };
  })[0];
};

export const removeOption: any = (list: MyOptions[], value: string) => {
  return list.filter((opt: any) => {
    const valueOptions = typeof opt.value === 'number' ? parseFloat(value) : value;
    if (opt.$$typeof) {
      return opt.props['data-value'] !== value;
    } else {
      return opt.value !== valueOptions;
    };
  });
};

const DropdownList: FC<IDropdownListProps> = ({
  coordinatesInput: {
    topInput, bottomInput, leftInput
  },
  list,
  currentMultiValue,
  setCurrentMultiValue,
  setOpened,
  onChange,
  dropdownListBorders,
  widthDropdownList,
  opened,
}) => {

const handleOptionClick = useCallback((e) => {
  let { value } = e.currentTarget.dataset
  setOpened(false);

  if (!findOption(currentMultiValue, value)) {
    onChange?.([...currentMultiValue, findOption(list, value)]);
    setCurrentMultiValue(
      (currentMultiValue) => [ ...currentMultiValue, findOption(list, value) ]
    );
  } else {
    onChange?.(removeOption(currentMultiValue, value))

    setCurrentMultiValue(
      (currentMultiValue) => removeOption(currentMultiValue, value)
    );
  };
}, [currentMultiValue, list, onChange, setCurrentMultiValue, setOpened]);

const setOptionContent = (item: any, i: number) => {
    const itemType = item.$$typeof ? item.props['data-value'] : item.value
    const itemLabel = item.$$typeof ? item : item.label
    const key = item.$$typeof ? (Math.random() * 1000).toString(16) : item.value
    return (
      <OptionContent
        key={key}
        data-value={itemType}
        onClick={handleOptionClick}
      >
        <Checkbox style={{ pointerEvents: 'none' }}>
          <input type='checkbox' checked={!!findOption(currentMultiValue, itemType)} readOnly />
        </Checkbox>
        <OptionContentLabel>{itemLabel}</OptionContentLabel>
      </OptionContent>
    )
  }

  return (
      <OptionWrapper
        data-option-wrapper
        opened={opened}
        dropdownListBorders={dropdownListBorders}
        tabIndex={1}
        leftInput={leftInput}
        topInput={topInput}
        bottomInput={bottomInput}
        widthDropdownList={widthDropdownList}
      >
          {list.map(
              (item: any, i: number) => setOptionContent(item, i)
          )}
      </OptionWrapper>
  );
};

export default DropdownList;
