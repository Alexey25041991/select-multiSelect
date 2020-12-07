import React, { useState, useEffect, useCallback } from 'react';

import Input from './Input';
import DropdownList from './DropdownList';

import { ISelectProps, MyOptions } from 'types';
import {
  SelectWrapper, SelectContainer,
  Label, AdditionalText,
} from './styled';

const MySelect: React.FC<ISelectProps> = ({
  width, options, menuOpenAndClose, initialValue, onChange, className
}) => {
  // Ref to container
  const initialValueOptions = initialValue ? initialValue : [];
  const list = [...options, ...initialValueOptions];
  // const list = list1.reduce((st: any, el: any) => (st.map((e: { value: any; }) => e.value)).includes(el.value) ? st : [...st, el],[])

  // Дропдаун открыт/закрыт

  const [ dropdownListBorders, setDropdownListMoveBorders ] = useState<boolean>(false);


  const [ opened, setOpened ] = useState<boolean>(!!menuOpenAndClose);
  const [ currentMultiValue, setCurrentMultiValue ] = useState<MyOptions[]>(initialValueOptions);

  // TODO: Вынести в хуки
  // Click outside select
  useEffect(() => {
    !!menuOpenAndClose && setOpened(menuOpenAndClose)

    const closeHandler = (e: any) => {
      let target: any = e.target;
      if (!target.closest('[data-close-border]') && !menuOpenAndClose) setOpened(false);
    };

    document.addEventListener('click', closeHandler);

    return () => document.removeEventListener('click', closeHandler);
  });

  const handleSelectWrapperClick = useCallback((e) => {
    e.stopPropagation();
    
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

        if(bottomHeightBorder - 72 - 2> box.height) {
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
  }

  // @ts-ignore
  return (
    <SelectWrapper className={className} width={width} data-close-border>
      <Label disabled={false}>
        Город
      </Label>

      <SelectContainer onClick={handleSelectWrapperClick}>

        <Input inputProps = {inputProps}/>

        <DropdownList
          list={list}
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
