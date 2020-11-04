import React, { useCallback } from 'react';

import { IChipItemProps } from 'types';
import {
  ChipItemWrapper, CloseIconContainer, CloseSolidIcon
} from './styled';



const ChipItem: React.FC<IChipItemProps> = ({
  children, value,
  currentMultiValue,
  setCurrentMultiValue,
  ...restProps
}) => {
  const handleRemoveChipClick = useCallback((e) => {
    e.stopPropagation();
    setCurrentMultiValue(currentMultiValue.filter((opt: any) => opt.value !== e.target.dataset.value));
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
