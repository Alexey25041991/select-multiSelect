import React, { useState, useEffect, useCallback } from 'react';

import Input from './Input';
import DropdownList from './DropdownList';

import { ISelectProps, MyOptions } from 'types';
import {
  SelectWrapper, SelectContainer,
  Label, AdditionalText,
} from './styled';

const MySelect: React.FC<ISelectProps> = ({
  width, options, menuOpenAndClose, initialValue, maxWidthChip, onChange, className,
}) => {
  // Ref to container
  const initialValueOptions = initialValue ? initialValue : [];
  const list = [...options, ...initialValueOptions];
  // const list = list1.reduce((st: any, el: any) => (st.map((e: { value: any; }) => e.value)).includes(el.value) ? st : [...st, el],[])

  // Дропдаун открыт/закрыт

  const [ dropdownListBorders, setDropdownListMoveBorders ] = useState<boolean>(false);


  const [ opened, setOpened ] = useState<boolean>(!!menuOpenAndClose);
  const [ currentMultiValue, setCurrentMultiValue ] = useState<MyOptions[]>(initialValueOptions);
  const [ coordinatesInput, setСoordinatesInput ] = useState<any>({});

  // TODO: Вынести в хуки
  // Click outside select
  useEffect(() => {
    !!menuOpenAndClose && setOpened(menuOpenAndClose)
  });

  const handleSelectWrapperClick = useCallback((e) => {
    e.stopPropagation();

    const a = document.querySelector('[data-option-wrapper]');
    const b = document.documentElement.clientHeight;


    if(a) {
      const getCoords = (a: any , b: any) => {
        let boxOption = a.getBoundingClientRect();

        const top = boxOption.top
        const bottom = boxOption.top + boxOption.height;
        const bottomHeightBorder = b - bottom
        const bottomHeight = b - boxOption.top
        const bottomSwitch = Math.abs(top) > Math.abs(bottomHeight);

        if(bottomHeightBorder < 0 ) {
          setDropdownListMoveBorders(true);
        }

        if(bottomHeightBorder - 72 - 2> boxOption.height) {
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
      console.log('???getCoords', getCoords(a, b))

    }

    menuOpenAndClose? setOpened(menuOpenAndClose) : setOpened((opened: any) => !opened)
    // setOpened((opened: any) => !opened)

  }, [menuOpenAndClose]);

  const inputProps = {
    initialValueOptions,
    currentMultiValue,
    setCurrentMultiValue,
    opened,
    onChange,
    maxWidthChip,
    width
  }

  const onBlur = (e: any ) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpened(false)
    }
  };

  const onFocus = (e: any) => {
    if (e.currentTarget === e.target) {
      let boxInput = e.target.getBoundingClientRect()
      const topInput = boxInput.top
      const bottomInput = boxInput.top + boxInput.height;
      const leftInput = boxInput.left;
      setСoordinatesInput({topInput, bottomInput, leftInput})
    }
  };

  // @ts-ignore
  return (
    <SelectWrapper className={className} width={width} data-close-border>
      <Label disabled={false}>
        Город
      </Label>

      <SelectContainer 
        onClick={handleSelectWrapperClick}  
        data-select-container
        tabIndex={1}
        onBlur={onBlur}
        onFocus={onFocus}
      >

        <Input inputProps = {inputProps}/>

        <DropdownList
          list={list}
          coordinatesInput={coordinatesInput}
          currentMultiValue={currentMultiValue}
          setCurrentMultiValue={setCurrentMultiValue}
          setOpened={setOpened}
          onChange={onChange}
          dropdownListBorders={dropdownListBorders}
          opened={opened}
        />
      </SelectContainer>

      <AdditionalText error={false} disabled={false}>
        Место фактического проживания
      </AdditionalText>
    </SelectWrapper>
  );
};

export default MySelect;
