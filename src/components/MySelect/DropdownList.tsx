import React, { FC, useState, useEffect, useCallback } from 'react';

import { IDropdownListProps } from 'types';
import {  OptionWrapper, OptionContent, Checkbox, } from './styled';

  import { MyOptions } from 'types';

const findOption: any = (list: MyOptions[], value: string) => {
  return list.filter((opt: any) => {
    if (opt.$$typeof) {
      return opt.props['data-value'] === value;
    } else {
      return opt.value === value;
    };
  })[0];
};

export const removeOption: any = (list: MyOptions[], value: string) => {
  return list.filter((opt: any) => {
    if (opt.$$typeof) {
      return opt.props['data-value'] !== value;
    } else {
      return opt.value !== value;
    };
  });
};

const DropdownList: FC<IDropdownListProps> = ({
  list,
  currentMultiValue,
  setCurrentMultiValue,
  setOpened,
  onChange,
}) => {

  const [ dropdownListBorders, setDropdownListMoveBorders ] = useState<boolean>(false);

useEffect(() => {
    const a = document.getElementById('OptionWrapper');
    const b = document.documentElement.clientHeight

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

        return {
          top: top,
          bottom: bottom,
          bottomHeightBorder: bottomHeightBorder,
          bottomHeight: bottomHeight,
          bottomSwitch: bottomSwitch,
        };
      }
      // console.log('???getCoords', getCoords(a, b))
    }
});

const handleOptionClick = useCallback((e) => {
  let { value } = e.currentTarget.dataset
  setOpened(false);
  // console.log(1, currentMultiValue)
  // console.log(2, findOption(list, value))
  // console.log(3, !findOption(currentMultiValue, value))
  // console.log(4, [...currentMultiValue, findOption(list, value)])
  // const valueOption = [...currentMultiValue, findOption(list, value)]

  // onChange?.([...currentMultiValue, findOption(list, value)]);

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
}, [currentMultiValue, list, setCurrentMultiValue]);

const setOptionContent = (item: any, i: number) => {
    const itemType = item.$$typeof ? item.props['data-value'] : item.value
    const itemLabel = item.$$typeof ? item : item.label
    const key = item.$$typeof ? i : item.value
    return (
      <OptionContent
        key={key}
        data-value={itemType}
        onClick={handleOptionClick}
      >
        <Checkbox style={{ pointerEvents: 'none' }}>
          <input type='checkbox' checked={!!findOption(currentMultiValue, itemType)} readOnly />
        </Checkbox>
        {itemLabel}
      </OptionContent>
    )
  }


  return (
    <OptionWrapper id="OptionWrapper" dropdownListBorders={dropdownListBorders}>
        {list.map(
            (item: any, i: number) => setOptionContent(item, i)
        )}
    </OptionWrapper>
  );
};

export default DropdownList;
