import React, { useState, useEffect } from 'react';

import Input from './Input';
import DropdownList from './DropdownList';

import { ISelectProps, MyOptions } from 'types';
import {
  SelectWrapper, SelectContainer,
  Label, AdditionalText,
} from './styled';

const MySelect: React.FC<ISelectProps> = ({
  width, options, initialValue
}) => {
  // Ref to container
  const initialValueOptions = initialValue ? initialValue : [];
  const list1 = [...options, ...initialValueOptions];
  const list = list1.reduce((st: any, el: any) => (st.map((e: { value: any; }) => e.value)).includes(el.value) ? st : [...st, el],[])

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
  });

  return (
    <SelectWrapper width={width} data-close-border>
      <Label disabled={false}>
        Город
      </Label>

      <SelectContainer>

        <Input 
          initialValueOptions={initialValueOptions} 
          currentMultiValue={currentMultiValue}
          setCurrentMultiValue={setCurrentMultiValue}
          setOpened={setOpened}
          opened={opened}
        />

        {opened && (
          <DropdownList 
            list={list}
            currentMultiValue={currentMultiValue}
            setCurrentMultiValue={setCurrentMultiValue}
          />
        )}
      </SelectContainer>

      <AdditionalText error={false} disabled={false}>
        Место фактического проживания
      </AdditionalText>
    </SelectWrapper>
  );
};

export default MySelect;
