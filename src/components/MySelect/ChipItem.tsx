import React, { useCallback } from 'react';

import { IChipItemProps } from 'types';
import {
  ChipItemWrapper, CloseIconContainer, CloseSolidIcon
} from './styled';

import { removeOption } from './DropdownList'



const ChipItem: React.FC<IChipItemProps> = ({
  children, value, disabled,
  currentMultiValue,
  setCurrentMultiValue,
  onChange,
  ...restProps
}) => {
  const handleRemoveChipClick = useCallback((e) => {
    const { value } = e.currentTarget.dataset;
    e.stopPropagation();

    onChange?.(removeOption(currentMultiValue, value))

    setCurrentMultiValue(removeOption(currentMultiValue, value));
  }, [ currentMultiValue, setCurrentMultiValue ]);


  return (
    <ChipItemWrapper {...restProps}>
      {children}

      <CloseIconContainer>
        <CloseSolidIcon
          onClick={handleRemoveChipClick}
          data-value={value}
        >
          x
        </CloseSolidIcon>
      </CloseIconContainer>
    </ChipItemWrapper>
  );
};

export default ChipItem;
