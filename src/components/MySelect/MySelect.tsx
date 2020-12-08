import React, { useState, useEffect, useCallback } from 'react';

import Input from './Input';
import DropdownList from './DropdownList';

import { ISelectProps, MyOptions } from 'types';
import {
  SelectWrapper, SelectContainer,
  Label, AdditionalText,
} from './styled';

const MySelect: React.FC<ISelectProps> = ({
  width, options, menuOpenAndClose, initialValue, maxWidthChip, onChange, className, widthDropdownList,
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

  console.log('dropdownListBorders', dropdownListBorders)

  // TODO: Вынести в хуки
  // Click outside select
  useEffect(() => {
    !!menuOpenAndClose && setOpened(menuOpenAndClose)
    setСoordinatesInput(coordinatesInput)
  });

  const handleSelectWrapperClick = useCallback((e) => {
    e.stopPropagation();
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
      const boxOption = e.target.children[1].getBoundingClientRect();
      const b = document.documentElement.clientHeight;

      const topInput = boxInput.top
      const bottomInput = boxInput.top + boxInput.height;
      const leftInput = boxInput.left;
      setСoordinatesInput({topInput, bottomInput, leftInput})

      console.log('boxInput', topInput, bottomInput, leftInput)

      if(boxOption) {
        const top = boxOption.top
        const bottom = boxOption.top + boxOption.height;
        const bottomHeightBorder = b - bottom
        const bottomHeight = b - boxOption.top

        console.log('boxOption', top, bottom, bottomHeightBorder, bottomHeight)

        if(bottomHeightBorder < 0 ) {
          setDropdownListMoveBorders(true);
        }

        if(bottomHeightBorder - 72 - 2> boxOption.height) {
          setDropdownListMoveBorders(false);
        }
      }
    } 
  };

  // @ts-ignore
  return (
    <SelectWrapper className={className} width={width} data-close-border >
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
          widthDropdownList={widthDropdownList}
        />
      </SelectContainer>

      <AdditionalText error={false} disabled={false}>
        Место фактического проживания
      </AdditionalText>
    </SelectWrapper>
  );
};

export default MySelect;
