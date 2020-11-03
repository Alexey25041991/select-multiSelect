import React, { useState, useCallback } from 'react';
import { ISelectProps, ISelectItem } from 'types';
import { SelectWrapper, OptionsDropdown, CurrentValue } from './styled';


const MySelect: React.FC<ISelectProps> = ({
  width, options, value
}) => {
  const findOption = (options: ISelectItem[], value: string) => {
    return options.filter(opt => opt.value === value)[0];
  };


  const [ opened, setOpened ] = useState<boolean>(false);

  const handleSelectWrapperClick = useCallback(() => {
    setOpened(opened => !opened);
  }, []);


  const [ currentValue, setCurrentValue ] = useState<string>(value!);

  const handleOptionClick = useCallback((e) => {
    setCurrentValue(e.target.dataset.value);
    setOpened(false);
  }, []);


  return (
    <SelectWrapper width={width}>
      <CurrentValue onClick={handleSelectWrapperClick}>
        {currentValue ? findOption(options, currentValue).label : 'Не выбрано'}
      </CurrentValue>

      {opened && <OptionsDropdown>
        {options.map(
          ({ label, value }) => (
            <div
              key={value} data-value={value}
              onClick={handleOptionClick}
            >
              {label}
            </div>
          )
        )}
      </OptionsDropdown>}
    </SelectWrapper>
  )
}

export default MySelect;
